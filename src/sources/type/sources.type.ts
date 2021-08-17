/* eslint-disable prettier/prettier */
import { InputType, Field, ID, ObjectType } from '@nestjs/graphql';

import { AuthorType, NewAuthorType } from './author.type';

@ObjectType({ isAbstract: true })
export class TypeSource {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
    @Field()
    type: String;
    @Field()
    subType: String;

    //linguisticas prensa o libro
    @Field()
    support: String;
    @Field()
    bloque: String;
    @Field()
    year: Number;
    @Field(() => [AuthorType])
    author: [AuthorType];
    @Field()
    title: String;
    @Field()
    country: String;
    @Field()
    theme: String;
    @Field()
    publication: String;

    //linguisticas internet
    @Field()
    URL: String;

    //linguisticas audio o video
    @Field()
    date: Date;
    @Field()
    cantMin: Number;
    @Field()
    broadcastMedium: String;
    @Field()
    typology: String;
    @Field()
    speaker: String;

    //metalinguisticas
    @Field()
    dictionaryType: String;
    @Field()
    century: String;
}

@ObjectType({ isAbstract: true })
export class CreatedSourcesType {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
    @Field()
    type: String;
    @Field()
    subType: String;
    
    //linguisticas prensa o libro
    @Field()
    support: String;
    @Field()
    bloque: String;
    @Field()
    year: Number;
    @Field(() => [AuthorType])
    author: [AuthorType];
    @Field()
    title: String;
    @Field()
    country: String;
    @Field()
    theme: String;
    @Field()
    publication: String;

    //linguisticas internet
    @Field()
    URL: String;

    //linguisticas audio o video
    @Field()
    date: Date;
    @Field()
    cantMin: Number;
    @Field()
    broadcastMedium: String;
    @Field()
    typology: String;
    @Field()
    speaker: String;

    //metalinguisticas
    @Field()
    dictionaryType: String;
    @Field()
    century: String;
}

@InputType({ isAbstract: true })
export class NewSourcesType {
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
    @Field()
    type: String;
    @Field()
    subType: String;
    
    //linguisticas prensa o libro
    @Field()
    support: String;
    @Field()
    bloque: String;
    @Field()
    year: Number;
    @Field(() => [NewAuthorType])
    author: [NewAuthorType];
    @Field()
    title: String;
    @Field()
    country: String;
    @Field()
    theme: String;
    @Field()
    publication: String;

    //linguisticas internet
    @Field()
    URL: String;

    //linguisticas audio o video
    @Field()
    date: Date;
    @Field()
    cantMin: Number;
    @Field()
    broadcastMedium: String;
    @Field()
    typology: String;
    @Field()
    speaker: String;

    //metalinguisticas
    @Field()
    dictionaryType: String;
    @Field()
    century: String;
}

@InputType({ isAbstract: true })
export class EditedSource {
    @Field(() => ID)
    id?: String;
    @Field()
    name: String;
    @Field()
    ref: String;
    @Field()
    file: String;
    @Field()
    type: String;
    @Field()
    subType: String;
    
    //linguisticas prensa o libro
    @Field()
    support: String;
    @Field()
    bloque: String;
    @Field()
    year: Number;
    @Field(() => [NewAuthorType])
    author: [NewAuthorType];
    @Field()
    title: String;
    @Field()
    country: String;
    @Field()
    theme: String;
    @Field()
    publication: String;

    //linguisticas internet
    @Field()
    URL: String;

    //linguisticas audio o video
    @Field()
    date: Date;
    @Field()
    cantMin: Number;
    @Field()
    broadcastMedium: String;
    @Field()
    typology: String;
    @Field()
    speaker: String;

    //metalinguisticas
    @Field()
    dictionaryType: String;
    @Field()
    century: String;
}
