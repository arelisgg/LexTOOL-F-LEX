/* eslint-disable prettier/prettier */
import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { EntryType,NewEntryType } from 'src/entry/type/entry.type';

@ObjectType()
export class LemarioType {
    @Field(() => ID)
    id?: String;
    @Field({ nullable: true })
    name: String;
    @Field(()=>[EntryType])
    entries: EntryType[];
}

@ObjectType()
export class CreatedLemarioType {
    @Field(() => ID)
    id?: String;
    @Field({ nullable: true })
    name: String;
    @Field(()=>[EntryType])
    entries: EntryType[];
}

@InputType()
export class NewLemarioType {
    @Field({ nullable: true })
    name: String;
    @Field(()=>[NewEntryType],{ nullable: true })
    entries: NewEntryType[]; 
}

@InputType()
export class EditedLemarioType {
    @Field(() => ID)
    id?: String;
    @Field({ nullable: true })
    name: String;
}
