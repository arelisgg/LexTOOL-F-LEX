/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Lemario } from './model/lemario.modelinterface';
import { CreatedLemarioType, EditedLemarioType, LemarioType, NewLemarioType } from './type/lemario.type';

import { NewEntryType } from 'src/entry/type/entry.type';
import { EntryService } from 'src/entry/entry.service';


@Injectable()
export class LemarioService {

  constructor(
    @InjectModel('Lemario') private readonly lemarioModel: Model<Lemario>,
    private readonly entryService: EntryService,
  ) { }

  async getAllLemarios() {
    const e = await this.lemarioModel.find()
      .populate({
        path: 'entries',
        model: 'Entry',
        populate: {
          path: 'source',
          model: 'Sources',
        },
      })
      .exec();
    return e;
  }

  async createLemario(createdLemario: NewLemarioType) {
    const lemario = new this.lemarioModel({
      name: createdLemario.name,
      entries: [],
    });
    await lemario.save();
    return lemario;
  }

  async getAllEntriesByID(lemarioID: String) {
    const l = await this.lemarioModel
      .findById(lemarioID).populate({
        path: 'entries',
        model: 'Entry',
        populate: {
          path: 'source',
          model: 'Sources',
        },
      }).exec();
    const entries = [];
    l.entries.forEach(async element => {
      const e = await this.entryService.findByID(element);
      if (e.selected) {
        entries.push(e);
      }
    });
    console.log(entries);
    if (entries.length > 0) {
      return entries;
    } else {
      throw new Error(`Diccionario con id ${lemarioID} no tiene entradas seleccionadas`);
    }
  }

  async findByID(lemarioID: String) {
    const lemario = await this.lemarioModel.findById(lemarioID).populate({
      path: 'entries',
      model: 'Entry',
      populate: {
        path: 'source',
        model: 'Sources',
      },
    });
    return lemario;
  }

  async deleteLemario(lemarioID: String) {
    const l = await this.lemarioModel.findById(lemarioID).populate({
      path: 'entries',
      model: 'Entry',
      populate: {
        path: 'source',
        model: 'Sources',
      },
    });
    if (!l) {
      throw new Error('Lemario dont exist');
    }
    l.entries.forEach(async eID => {
      this.entryService.deleteEntryByID(eID);
    });
    const deletedLemario = await l.deleteOne();
    console.log(deletedLemario);
    return deletedLemario;
  }

  async editLemario(newLemario: EditedLemarioType) {
    let oldLemario = await this.lemarioModel
      .findById(newLemario.id)
      .exec();

    if (oldLemario) {
      oldLemario.name = newLemario.name;

      oldLemario.save();
      console.log('oldLemarioy:', oldLemario);

      return oldLemario;
    } else {
      throw new Error('No existe la Lemario');
    }
  }
}
