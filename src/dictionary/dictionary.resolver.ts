import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  DictionaryType,
  CreatedDictionaryType,
  NewDictionaryType,
} from './type/dictionary.types';
import { DictionaryService } from './dictionary.service';
import { NewSourcesType } from 'src/sources/type/sources.type';

@Resolver()
export class DictionaryResolver {
  constructor(private readonly DictionaryService: DictionaryService) {}

  @Query(() => [DictionaryType])
  async getAllDictionaries() {
    return await this.DictionaryService.getAllDictionaries();
  }

  
  @Mutation(() => CreatedDictionaryType)
     async createDictionary(@Args('createdDictionary') createdDictionary: NewDictionaryType) {
     return await this.DictionaryService.createDictionary(createdDictionary);
    }
}
