import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatedLemarioType, LemarioType, NewLemarioType } from './type/lemario.type'
import { LemarioService } from "./lemario.service";
import { EntryType, NewEntryType } from 'src/entry/type/entry.type';


@Resolver('lemario')
export class LemarioResolver {
    constructor ( private lemarioService: LemarioService) {
    }

    @Query(() => [LemarioType])
     async findAllLemarios() {
     return await this.lemarioService.getAllLemarios();
    }

    @Mutation(() => CreatedLemarioType)
     async createLemario(@Args('createdLemario') createdLemario: NewLemarioType) {
     return await this.lemarioService.createLemario(createdLemario);
    }

    @Mutation(() => EntryType)
     async createEntryByLemarioID( 
         @Args('newEntry') newEntry: NewEntryType, 
         @Args('lemarioID') lemarioID: String
         ){
       return this.lemarioService.createEntryByLemarioID( 
           newEntry,
           lemarioID
        );
    }

    @Mutation(() => LemarioType)
    async deleteLemarioByID(@Args('lemarioID') lemarioID: String) {
      console.log(lemarioID);
      return this.lemarioService.deleteLemario(lemarioID);
    }
}
