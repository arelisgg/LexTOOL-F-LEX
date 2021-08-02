import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  DictionaryType,
  CreatedDictionaryType,
  NewDictionaryType,
  EditedDictionaryType,
} from './type/dictionary.types';
import { DictionaryService } from './dictionary.service';
import { DictionarySourcesType, NewSourcesType, TypeSource } from 'src/sources/type/sources.type';
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

    @Query(() => LemarioType)
     async getLemarioByDictionaryID(@Args('dictionaryID') dictionaryID: String) {
     return this.DictionaryService.getLemarioByDictionaryID(dictionaryID);
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
        @Args('newLemario') newLemario: NewLemarioType, 
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

   @Mutation(() => DictionaryType)
   async deleteDictionaryByID(
     @Args('dictionaryID') dictionaryID: String) {
     console.log('dictionaryID');
     return this.DictionaryService.deleteDictionary(dictionaryID);
   }

   @Mutation(() => DictionaryType)
   async updateDictionaryByID(
     @Args('newDictionary' ) newDictionary: EditedDictionaryType) {
   console.log(newDictionary);
   return this.DictionaryService.editDictionary(newDictionary);
  }

}
