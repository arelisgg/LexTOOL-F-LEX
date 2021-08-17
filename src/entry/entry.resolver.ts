import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatedEntryType, EditedEntryType, EntryType, NewEntryType } from './type/entry.type'
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

 @Query(() => [EntryType])
 async getAllEntriesBySourceID(@Args('sourceID') sourceID: String) {
   return this.entryService.getAllEntriesBySourceID(sourceID);
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

  @Mutation(() => EntryType)
      async updateEntryByID(
        @Args('newEntry' ) newEntry: EditedEntryType) {
      console.log(newEntry);
      return this.entryService.editEntry(newEntry);
    }
}
