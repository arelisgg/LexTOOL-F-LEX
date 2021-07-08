/* eslint-disable prettier/prettier */
import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { EntryType,NewEntryType } from 'src/entry/type/entry.type';

@ObjectType()
export class LemarioType {
    @Field(() => ID)
    id?: string;
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(()=>[EntryType])
    entries: EntryType[];
}

@ObjectType()
export class CreatedLemarioType {
    @Field(() => ID)
    id?: string;
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(()=>[EntryType])
    entries: EntryType[];
}

@InputType()
export class NewLemarioType {
    @Field()
    name: string;
    @Field()
    dictionaryType: string;
    @Field(()=>[NewEntryType],{ nullable: true })
    entries: NewEntryType[]; 
}
