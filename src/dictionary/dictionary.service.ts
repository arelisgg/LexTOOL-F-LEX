import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionaryType, DictionaryType, CreatedDictionaryType, EditedDictionaryType } from './type/dictionary.types';
import { LemarioService } from 'src/lemario/lemario.service';

@Injectable()
export class DictionaryService {

  constructor(
    @InjectModel('Dictionary') private DictionaryModel: Model<Dictionary>,
    private readonly lemarioService: LemarioService,
  ) { }


  async getAllDictionariesA() {
    const e = await this.DictionaryModel.find()

    return e;
  }

  async createDictionary(createdDictionary: NewDictionaryType) {
    const d = new this.DictionaryModel({
      description: createdDictionary.description,
      name: createdDictionary.name,
      image: createdDictionary.image,
      state: createdDictionary.state,      
      dictionaryType: createdDictionary.dictionaryType
    });
    await d.save();
    return d;
  }

  async findByID(dictionaryID: String) {
    const d = await this.DictionaryModel
      .findById(dictionaryID)
      
      console.log(d);
    return d;
  }

  async deleteDictionary(dictionaryID: String) {
    const d = await this.DictionaryModel.findById(dictionaryID)
     
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {
      const deletedDictionary = await d.deleteOne();
      console.log(deletedDictionary);
      return deletedDictionary;
    }
  }

}