import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionaryType, DictionaryType, CreatedDictionaryType, EditedDictionaryType } from './type/dictionary.types';
import { LemarioType, NewLemarioType } from 'src/lemario/type/lemario.type';
import { LemarioService } from 'src/lemario/lemario.service';
import { literal } from 'sequelize';

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
      reference: createdDictionary.reference,
      state: createdDictionary.state
    });
    await d.save();
    return d;
  }

  async createLemarioByDictionaryID(
    newLemario: NewLemarioType,
    dictionaryID: String,
  ) {
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {
      const sModel = await this.lemarioService.createLemario(newLemario);

      const idLemario = sModel.id;

      console.log(idLemario);
      console.log(d.lemario);

      d.lemario = idLemario;
      console.log(d.lemario);
      console.log(d.name);

      const updatedDictionary = await this.DictionaryModel.findOneAndUpdate(
        {_id: dictionaryID},
        d,
        {new:true}
      );
      console.log(updatedDictionary);
      console.log(sModel);
      return updatedDictionary;
    }
  }

  async getLemarioByDictionaryID(
    dictionaryID: String,
  ) {
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {
      const sModel = await this.lemarioService.findByID(d.lemario);
      let lemario = sModel;
      return lemario;
    }
  }

  async addSourcesToDictionary(
    dictionaryID: String,
  ) {
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {

      const updatedDictionary = await this.DictionaryModel.findOneAndUpdate(
        dictionaryID,
        d,
      ).exec();
      console.log(updatedDictionary);
      return updatedDictionary;
    }
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
      const l = d.lemario;
      this.lemarioService.deleteLemario(l);
      const deletedDictionary = await d.deleteOne();
      console.log(deletedDictionary);
      return deletedDictionary;
    }
  }

}