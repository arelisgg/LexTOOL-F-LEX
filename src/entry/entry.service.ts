/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Entry } from './model/entry.modelinterface';
import { CreatedEntryType, NewEntryType, EntryType, EditedEntryType } from './type/entry.type';
import { SourcesService } from 'src/sources/sources.service';
import { OcurrenceRecordType } from 'src/ocurrenceRecord/type/ocurrenceRecord.type';
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

  async getAllEntriesWhithSourceRef() {
    const e = await this.entryModel.find();
    const entriesWhithSourceRef: EntryType[] = [];
    if (e.length > 0) {
      for (let i = 0; i < e.length; i++) {
        const s = await this.sourceService.findByID(e[i].source);
        if (s !== null) {
          e[i].source = s.ref;
          entriesWhithSourceRef.push(e[i]);
        } else {
          throw new Error(`Fuente no existe`);
        }
      }
    }
    return entriesWhithSourceRef;
  }

  async getAllEntriesBySourceID(sourceID: String): Promise<EntryType[]> {
    const entries = await this.getAllEntries();

    let entriesOfTheSource: EntryType[] = [];
    if (entries.length > 0) {
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        if (e.source === sourceID) {
          entriesOfTheSource.push(e);
        }
      }
    }
    return entriesOfTheSource;
  }

  async getAllSelectedEntries(): Promise<EntryType[]> {
    const entries = await this.getAllEntries();

    let selectedEntries: EntryType[] = [];
    if (entries.length > 0) {
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        if (e.selected) {
          selectedEntries.push(e);
        }
      }
    }
    return selectedEntries;
  }

  async getAllVariations(entryID: String): Promise<OcurrenceRecordType[]> {
    const entry = await this.entryModel.findById(entryID);
    const ocurrences = entry.documentation;
    let variations: OcurrenceRecordType[] = [];
    if (ocurrences.length > 0) {
      ocurrences.forEach(element => {
        if (element.isVariation) {
          variations.push(element);
        }
      });
    }
    return variations;
  }

  async createEntry(createdEntry: NewEntryType) {
    const {
      lemma,
      letter,
      UF,
      context,
      source,
      selected,
    } = createdEntry;

    const e = new this.entryModel({
      lemma,
      letter,
      UF,
      context,
      source,
      selected,
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
      oldEntry.selected = newEntry.selected;

      oldEntry.save();
      console.log('oldEntry:', oldEntry);

      return oldEntry;
    } else {
      throw new Error('No existe la entrada');
    }
  }
}
