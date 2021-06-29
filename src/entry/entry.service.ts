/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Entry } from './interface/entry.interface';
import { CreateEntryDTO } from './dto/entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel('Entry') private readonly entryModel: Model<Entry>,
  ) { }
  async getEntries(): Promise<Entry[]> {
    const entries = await this.entryModel.find();
    return entries;
  }
  async getEntry(entryID: string): Promise<Entry> {
    const entry = await this.entryModel.findById(entryID);
    return entry;
  }
  async createEntry(createEntryDTO: CreateEntryDTO): Promise<Entry> {
    const entry = new this.entryModel(createEntryDTO);
    await entry.save();
    return entry;
  }
  async updateEntry(
    entryID: string,
    createEntryDTO: CreateEntryDTO,
  ): Promise<Entry> {
    const updatedEntry = await this.entryModel.findByIdAndUpdate(
      entryID,
      createEntryDTO,
      { new: true },
    );
    return updatedEntry;
  }
  async deleteEntry(entryID: string): Promise<Entry> {
    const deletedEntry = await this.entryModel.findByIdAndDelete(entryID);
    return deletedEntry;
  }
}
