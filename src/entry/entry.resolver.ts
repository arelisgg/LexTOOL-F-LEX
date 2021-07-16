import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatedEntryType, EntryType, NewEntryType } from './type/entry.type'
import { EntryService } from "./entry.service";

@Resolver('entry')
export class EntryResolver {

  constructor(private entryService: EntryService) {
  }
  
  @Query(() => [EntryType])
  async findAllEntries() {
  return await this.entryService.getAllEntries();
 }

 @Query(() => EntryType)
 async getEntryByID(@Args('entryID') entryID: String) {
   return this.entryService.findByID(entryID);
 }

 @Mutation(() => CreatedEntryType)
  async createEntry(@Args('createdEntry') createdEntry: NewEntryType) {
  return await this.entryService.createEntry(createdEntry);
 }

 @Mutation(() => EntryType)
  async deleteEntryByID(@Args('entryID') entryID: String) {
    console.log(entryID);
    return this.entryService.deleteEntry(entryID);
  }
}
