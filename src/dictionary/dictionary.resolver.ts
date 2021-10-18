import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  DictionaryType,
  CreatedDictionaryType,
  NewDictionaryType,
  EditedDictionaryType,
} from './type/dictionary.types';
import { DictionaryService } from './dictionary.service';
import { LemarioType, NewLemarioType } from 'src/lemario/type/lemario.type';

@Resolver()
export class DictionaryResolver {
  constructor(private readonly DictionaryService: DictionaryService) {}

    @Query(() => [DictionaryType])
      async findAllDictionariesA() {
      return await this.DictionaryService.getAllDictionariesA();
    }
  
    @Query(() => DictionaryType)
     async getDictionaryByID(@Args('dictionaryID') dictionaryID: String) {
     return this.DictionaryService.findByID(dictionaryID);
    }


    @Mutation(() => CreatedDictionaryType)
     async createDictionary(@Args('createdDictionary') createdDictionary: NewDictionaryType) {
     return await this.DictionaryService.createDictionary(createdDictionary);
    }

   @Mutation(() => DictionaryType)
   async deleteDictionaryByID(
     @Args('dictionaryID') dictionaryID: String) {
     console.log('dictionaryID');
     return this.DictionaryService.deleteDictionary(dictionaryID);
   }

}
