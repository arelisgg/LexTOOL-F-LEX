import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  Dictionary,
  CreatedDictionary,
  NewDictionary,
} from './type/dictionary.types';
import { DictionaryService } from './dictionary.service';

@Resolver()
export class DictionaryResolver {
  constructor(private readonly DictionaryService: DictionaryService) {}

    @Query(() => [Dictionary])
      async findAllDictionariesA() {
      return await this.DictionaryService.getAllDictionariesA();
    }
  
    @Query(() => Dictionary)
     async getDictionaryByID() {
     return this.DictionaryService.findByID();
    }

    @Mutation(() => CreatedDictionary)
     async createDictionary(@Args('createdDictionary') createdDictionary: NewDictionary) {
     return await this.DictionaryService.createDictionary(createdDictionary);
    }

   @Mutation(() => Dictionary)
   async deleteDictionaryByID(
     @Args('dictionaryID') dictionaryID: String) {
     console.log('dictionaryID');
     return this.DictionaryService.deleteDictionary(dictionaryID);
   }

}
