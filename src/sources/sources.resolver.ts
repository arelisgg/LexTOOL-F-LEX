import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {CreatedSourcesType, NewSourcesType, TypeSource } from './type/sources.type'
import { SourcesService } from "./sources.service";


@Resolver('sources')
export class SourcesResolver {
    constructor(private sourceService: SourcesService) {
    }

    
    @Mutation(() => CreatedSourcesType)
       async createSource(@Args('source') source: NewSourcesType) {
       return await this.sourceService.createSource(source);
      }

      @Query(() => [TypeSource])
      async findAllSources() {
        return await this.sourceService.findAllSources();
      }
}
