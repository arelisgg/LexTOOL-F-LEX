import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionaryType, DictionaryType, CreatedDictionaryType } from './type/dictionary.types';
import { SourcesService } from 'src/sources/sources.service';
import { NewSourcesType } from 'src/sources/type/sources.type';
import { NewLemarioType } from 'src/lemario/type/lemario.type';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel('Dictionary') private DictionaryModel: Model<Dictionary>,
    private readonly SourcesService: SourcesService,
  ) {}

    
  async getAllDictionaries() {
    const e = await this.DictionaryModel.find()
    .populate({
        path: 'sources',
        model: 'Sources',
      }).populate({
        path: 'lemario',
        model: 'Lemario',
        populate:{
          path: 'entries',
          model: 'Entry',
        },
      }).exec();
    return e;
  }
  
  async createDictionary(createdDictionary: NewDictionaryType) {
    
    const d = new this.DictionaryModel({
      description:createdDictionary.description,
      letters:createdDictionary.letters,
      name:createdDictionary.name,
      reference:createdDictionary.reference,
      sources: [],
      state:createdDictionary.state
    });
    await d.save();
    return d.populate({
      path: 'source',
      model: 'Sources',
    }).populate({
      path: 'lemario',
      model: 'Lemario',
      populate:{
        path: 'entries',
        model: 'Entry',
      },
    });
  }
 
}
