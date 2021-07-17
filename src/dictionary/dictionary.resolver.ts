import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  DictionaryType,
  CreatedDictionaryType,
  NewDictionaryType,
} from './type/dictionary.types';
import { DictionaryService } from './dictionary.service';
import { DictionarySourcesType, NewSourcesType, TypeSource } from 'src/sources/type/sources.type';
import { NewLemarioType } from 'src/lemario/type/lemario.type';

@Resolver()
export class DictionaryResolver {
  constructor(private readonly DictionaryService: DictionaryService) {}

    @Query(() => [DictionaryType])
      async getAllDictionaries() {
      return await this.DictionaryService.getAllDictionaries();
    }
  
    @Query(() => DictionaryType)
     async getDictionaryByID(@Args('dictionaryID') dictionaryID: String) {
     return this.DictionaryService.findByID(dictionaryID);
    }

    @Query(() => [TypeSource])
     async findAllSourcesByDictionaryID(@Args('dictionaryID') dictionaryID: String) {
     return this.DictionaryService.getAllSourcesByID(dictionaryID);
    }


    @Mutation(() => CreatedDictionaryType)
     async createDictionary(@Args('createdDictionary') createdDictionary: NewDictionaryType) {
     return await this.DictionaryService.createDictionary(createdDictionary);
    }

    @Mutation(() => DictionaryType)
     async createLemarioByDictionaryID( 
        @Args('newLemarioe') newLemario: NewLemarioType, 
        @Args('dictionaryID') dictionaryID: String
      ){
      return this.DictionaryService.createLemarioByDictionaryID( 
          newLemario,
          dictionaryID
       );
   }

   @Mutation(() => DictionaryType)
     async addSourcesToDictionary( 
        @Args({ name: 'sourcesIDs', type:() => [String] }) sourcesIDs: [String], 
        @Args('dictionaryID') dictionaryID: String
      ){
      return this.DictionaryService.addSourcesToDictionary( 
          sourcesIDs,
          dictionaryID
       );
   }
}
