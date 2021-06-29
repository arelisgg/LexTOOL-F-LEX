/* eslint-disable prettier/prettier */
import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { SourcesType, NewSourcesType } from 'src/sources/dto/sources.dto';

export class CreateLemarioDTO {
    readonly name: string;
    readonly sources: string[];
    readonly dictionaryType: string;
}

@ObjectType()
export class LemarioType {
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(() => [SourcesType])
    Sources: SourcesType[];
}

@ObjectType()
export class CreatedLemarioType {
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(() => [SourcesType])
    sources: SourcesType[];
}

@InputType()
export class NewLemarioType {
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(() => [NewSourcesType], { nullable: true })
    static sources: NewSourcesType[];
}
