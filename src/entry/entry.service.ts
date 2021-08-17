/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Entry } from './model/entry.modelinterface';
import { CreatedEntryType, NewEntryType, EntryType, EditedEntryType } from './type/entry.type';
import { SourcesService } from 'src/sources/sources.service';
@Injectable()
export class EntryService {
  constructor(
    @InjectModel('Entry') private readonly entryModel: Model<Entry>,
    private readonly sourceService: SourcesService,
  ) { }


  async getAllEntries() {
    const e = await this.entryModel.find();
    return e;
  }

  async getAllEntriesBySourceID(sourceID: String): Promise<EntryType[]> {
    const entries = await this.getAllEntries();
    
    let entriesOfTheSource: EntryType[] = [];
    if(entries.length > 0){
      for(let i = 0; i < entries.length; i++ ){
        const e = entries[i];
        if (e.source === sourceID) {
          entriesOfTheSource.push(e);
        }
      }
    }
    return entriesOfTheSource;
  }

  async createEntry(createdEntry: NewEntryType) {
    const {
      lemma,
      letter,
      UF,
      context,
      source,
    } = createdEntry;

    const e = new this.entryModel({
      lemma,
      letter,
      UF,
      context,
      source,
    });
    await e.save();
    return e;
  }

  async findByID(entryID: String) {
    const entry = await this.entryModel.findById(entryID);
    return entry;
  }

  async deleteEntry(entryID: String) {
    const e = await (await this.entryModel.findById(entryID));
    if (!e) {
      throw new Error(`Entrada con id: ${entryID} no existe`);
    }
    const deletedEntry = await e.deleteOne();
    console.log(deletedEntry);
    return deletedEntry;
  }

  async editEntry(newEntry: EditedEntryType) {
    let oldEntry = await this.entryModel
      .findById(newEntry.id)
      .exec();

    if (oldEntry) {
      oldEntry.UF = newEntry.UF;
      oldEntry.lemma = newEntry.lemma;
      oldEntry.context = newEntry.context;
      oldEntry.letter = newEntry.letter;
      oldEntry.source = newEntry.source;

      oldEntry.save();
      console.log('oldEntry:', oldEntry);

      return oldEntry;
    } else {
      throw new Error('No existe la entrada');
    }
  }
}
