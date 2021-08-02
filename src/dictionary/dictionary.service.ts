import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from './model/dictionary.modelinterface';
import { NewDictionaryType, DictionaryType, CreatedDictionaryType, EditedDictionaryType } from './type/dictionary.types';
import { SourcesService } from 'src/sources/sources.service';
import { NewSourcesType, TypeSource } from 'src/sources/type/sources.type';
import { LemarioType, NewLemarioType } from 'src/lemario/type/lemario.type';
import { LemarioService } from 'src/lemario/lemario.service';
import { literal } from 'sequelize';

@Injectable()
export class DictionaryService {

  constructor(
    @InjectModel('Dictionary') private DictionaryModel: Model<Dictionary>,
    private readonly SourcesService: SourcesService,
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
      sources: [],
      state: createdDictionary.state
    });
    await d.save();
    return d.populate({
      path: 'sources',
      model: 'Sources',
    });
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
      return updatedDictionary.populate({
        path: 'sources',
        model: 'Sources',
      });
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
    sourcesIDs: [String],
    dictionaryID: String,
  ) {
    const d = await this.DictionaryModel.findById(dictionaryID);
    if (!d) {
      throw new Error('Dictionary dont exist');
    } else {

      if (sourcesIDs.length > 0) {
        sourcesIDs.forEach(e => {
          d.sources.push(e);
        });
      } else {
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

  async getAllSourcesByID(dictionaryID: String) {
    const d = await this.DictionaryModel
      .findById(dictionaryID).populate({
        path: 'sources',
        model: 'Sources',
      }).exec();
    const sourcesIDs = d.sources;
    console.log(sourcesIDs);
    if (sourcesIDs.length > 0) {
      return sourcesIDs;
    } else {
      throw new Error(`Diccionario con id ${dictionaryID} no tiene fuentes asociadas`);
    }

  }

  async findByID(dictionaryID: String) {
    const d = await this.DictionaryModel
      .findById(dictionaryID)
      .populate({
        path: 'sources',
        model: 'Sources',
      }).exec();
      console.log(d);
    return d;
  }

  async deleteDictionary(dictionaryID: String) {
    const d = await this.DictionaryModel.findById(dictionaryID)
      .populate({
        path: 'sources',
        model: 'Sources',
      }).exec();
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

  async editDictionary(newDictionary: EditedDictionaryType) {
    let oldDictionary = await this.DictionaryModel
      .findById(newDictionary.id)
      .exec();
    const { newSources, sourcesID, d } = this.transformDictionary(
      newDictionary,
    );
    if (oldDictionary) {
      oldDictionary.name = newDictionary.name;
      oldDictionary.state = newDictionary.state;
      oldDictionary.reference = newDictionary.reference;
      oldDictionary.description = newDictionary.description;

      oldDictionary.sources.forEach(oS => {
        let found = false;
        let i = 0;
        for (; i < newSources.length && !found; i++) {
          const element = newSources[i];
          console.log('element.id:', element.id);
          console.log('oS:', oS);
          if (element.id == oS) {
            found = true;
            console.log('a');
          }
        }
        if (!found) {
          this.SourcesService.deleteSource(oS);
          oldDictionary.sources = oldDictionary.sources.filter(s => s != oS);
        }
      });
      newSources.forEach(async nS => {
        if (oldDictionary.sources.includes(nS.id)) {
          this.SourcesService.editSource(nS);
        } else {
          const createdSource = this.SourcesService.createDictionarySource(nS);
          oldDictionary.sources.push((await createdSource).id);
        }
      });
      oldDictionary.save();
      console.log('oldDictionary:', oldDictionary);
      return oldDictionary;

    } else {
      throw new Error('No existe la Dictionario');
    }
  }

  transformDictionary(dictionary: EditedDictionaryType) {
    let sourcesID = [];
    dictionary.sources.forEach(element => {
      sourcesID.push(element.id);
    });
    const d = new this.DictionaryModel({
      _id: dictionary.id,
      name: dictionary.name,
      state: dictionary.state,
      description: dictionary.description,
      reference: dictionary.reference,
      sources: sourcesID,
    });
    return { newSources: dictionary.sources, sourcesID, d };
  }
}