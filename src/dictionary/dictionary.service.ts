import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionary } from './type/dictionary.types';

@Injectable()
export class DictionaryService {

  constructor(
    @InjectModel('Dictionary') private readonly DictionaryModel: Model<Dictionary>,
  ) { }

  async getAllDictionariesA() {
    const e = await this.DictionaryModel.find()
    return e;
  }

  async createDictionary(createdDictionary: NewDictionary) {
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

  async findByID() {
    const e = await this.DictionaryModel.find()
    return e;
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