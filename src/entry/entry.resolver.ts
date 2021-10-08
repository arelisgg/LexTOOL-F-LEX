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

  @Query(() => [EntryType])
  async findAllEntriesWithDocs() {
    return await this.entryService.getAllEntriesWithDocs();
  }

  @Query(() => EntryType)
  async getEntryByID(@Args('entryID') entryID: String) {
    return this.entryService.findByID(entryID);
  }

  @Query(() => EntryType)
  async getEntryByIDWithDocs(@Args('entryID') entryID: String) {
    return this.entryService.findByIDWithDocs(entryID);
  }

  @Query(() => [EntryType])
  async findAllEntriesWithSourceRef() {
    return this.entryService.getAllEntriesWithSourceRef();
  }

  @Query(() => [EntryType])
  async getAllEntriesBySourceID(@Args('sourceID') sourceID: String) {
    return this.entryService.getAllEntriesBySourceID(sourceID);
  }

  @Query(() => [EntryType])
  async getAllSelectedEntries() {
    return this.entryService.getAllSelectedEntries();
  }

  @Mutation(() => CreatedEntryType)
  async createEntry(@Args('createdEntry') createdEntry: NewEntryType) {
    return await this.entryService.createEntry(createdEntry);
  }

  @Mutation(() => EntryType)
  async deleteEntryByID(@Args('entryID') entryID: String) {
    console.log(entryID);
    return this.entryService.deleteEntryByID(entryID);
  }

  @Mutation(() => EntryType)
  async deleteEntryDocByID(    
    @Args('entryID') entryID: String,
    @Args('orID') orID: String
    ){
    console.log(entryID);
    return this.entryService.deleteEntryDocByID(entryID, orID);
  }

  @Mutation(() => EntryType)
  async updateEntryByID(
    @Args('newEntry') newEntry: EditedEntryType) {
    return this.entryService.editEntry(newEntry);
  }

  @Mutation(() => EntryType)
  async updateEntryDocumentation(
    @Args('newEntry') newEntry: EditedEntryType) {
    return this.entryService.editEntryDocumentation(newEntry);
  }
}
