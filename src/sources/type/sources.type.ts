/* eslint-disable prettier/prettier */
import { InputType, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({isAbstract:true})
export class TypeSource {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
}

@ObjectType()
export class DictionarySourcesType {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
}

@ObjectType()
export class  EntrySourcesType {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
}

@ObjectType({isAbstract:true})
export class CreatedSourcesType {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
}

@InputType({isAbstract:true})
export class NewSourcesType {
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
}

