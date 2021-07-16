import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionaryType, DictionaryType, CreatedDictionaryType } from './type/dictionary.types';
import { SourcesService } from 'src/sources/sources.service';
import { NewSourcesType, TypeSource } from 'src/sources/type/sources.type';
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
        path: 'sources',
        model: 'Sources',
        })
        .populate({
          path: 'lemario',
          model: 'Lemario',
          populate:{
            path: 'entries',
            model: 'Entry',
            populate:{
              path: 'source',
              model: 'Sources',
            },
          },
        });
    }

  async createSourceByDictionaryID(
    newSource: NewSourcesType,
    dictionaryID: String,
  ){
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {
      const sModel = await this.SourcesService.createSource(newSource);
      d.sources.push(sModel.id);
      const updatedDictionary = await this.DictionaryModel.findOneAndUpdate(
        dictionaryID,
        d,
      ).exec();
      console.log(updatedDictionary);
      return updatedDictionary.populate({
        path: 'sources',
        model: 'Sources',
      });
    }
  }

  async addSourcesToDictionary(
    sourcesIDs: [String],
    dictionaryID: String,
  ){
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {
   
    if(sourcesIDs.length > 0){
      sourcesIDs.forEach(e =>{
        d.sources.push(e);
      }); 
    }else{
      throw new Error(`Diccionario con id ${dictionaryID} no tiene fuentes asociadas`);
    }
    
      const updatedDictionary = await this.DictionaryModel.findOneAndUpdate(
        dictionaryID,
        d,
      ).exec();
      console.log(updatedDictionary);
      return updatedDictionary.populate({
        path: 'sources',
        model: 'Sources',
      });
    }
  }
  
  async getAllSourcesByID(dictionaryID: String){
    const d = await this.DictionaryModel
    .findById(dictionaryID) .populate({
      path: 'sources',
      model: 'Sources',
    }).exec();
    const sourcesIDs = d.sources;
    console.log(sourcesIDs);
       if(sourcesIDs.length > 0){
      return sourcesIDs; 
    }else{
      throw new Error(`Diccionario con id ${dictionaryID} no tiene fuentes asociadas`);
    }
    
  }

  async findByID(dictionaryID: String) {
    const d = await this.DictionaryModel
      .findById(dictionaryID)
      .populate({
        path: 'sources',
        model: 'Sources',
        })
        .populate({
          path: 'lemario',
          model: 'Lemario',
          populate:{
            path: 'entries',
            model: 'Entry',
            populate:{
              path: 'source',
              model: 'Sources',
            },
          },
        }).exec();
      return d;
  }


}
