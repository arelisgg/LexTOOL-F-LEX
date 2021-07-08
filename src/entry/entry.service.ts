/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Entry } from './model/entry.modelinterface';
import { CreatedEntryType, NewEntryType, EntryType } from './type/entry.type';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel('Entry') private readonly entryModel: Model<Entry>,
  ) { }

  async getAllEntries() {
    const e = await this.entryModel.find()
    .populate({
        path: 'source',
        model: 'Sources',
      }).exec();
    return e;
  }
  
  async createEntry(createdEntry: NewEntryType) {
    const {
      lemma,
      ref,
      letter,
      UF,
      context,
      source,
    }=createdEntry;
    
    const e = new this.entryModel({
      lemma,
      ref,
      letter,
      UF,
      context,
      source,
    });
    await e.save();
    return e.populate({
      path: 'source',
      model: 'Sources',
    });
  }
  
  
  async getEntry(entryID: string): Promise<Entry> {
    const entry = await this.entryModel.findById(entryID);
    return entry;
  }

  async deleteEntry(entryID: String) {
    const e = await (await this.entryModel.findById(entryID)).populate({
      path: 'source',
      model: 'Sources',
    });
    if (!e) {
      throw new Error(`Entrada con id: ${entryID} no existe`);
    }
    const deletedEntry = await e.deleteOne();
    console.log(deletedEntry);
    return deletedEntry;
  }

}
