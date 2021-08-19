/* eslint-disable prettier/prettier */
import { InputType, Field, ID, ObjectType } from '@nestjs/graphql';

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
    @Field({ nullable: true })
    support: String;
    @Field({ nullable: true })
    bloque: String;
    @Field({ nullable: true })
    theme: String;
    @Field({ nullable: true })
    publication: String;

    //linguisticas internet
    @Field({ nullable: true })
    URL: String;

    //linguisticas audio o video
    @Field({ nullable: true })
    cantMin: Number;
    @Field({ nullable: true })
    broadcastMedium: String;
    @Field({ nullable: true })
    typology: String;
    @Field({ nullable: true })
    speaker: String;

    //metalinguisticas
    @Field({ nullable: true })
    dictionaryType: String;
    @Field({ nullable: true })
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
    @Field({ nullable: true })
    support: String;
    @Field({ nullable: true })
    bloque: String;
    @Field({ nullable: true })
    theme: String;
    @Field({ nullable: true })
    publication: String;

    //linguisticas internet
    @Field({ nullable: true })
    URL: String;

    //linguisticas audio o video
    @Field({ nullable: true })
    cantMin: Number;
    @Field({ nullable: true })
    broadcastMedium: String;
    @Field({ nullable: true })
    typology: String;
    @Field({ nullable: true })
    speaker: String;

    //metalinguisticas
    @Field({ nullable: true })
    dictionaryType: String;
    @Field({ nullable: true })
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
    @Field({ nullable: true })
    support: String;
    @Field({ nullable: true })
    bloque: String;
    @Field({ nullable: true })
    theme: String;
    @Field({ nullable: true })
    publication: String;

    //linguisticas internet
    @Field({ nullable: true })
    URL: String;

    //linguisticas audio o video
    @Field({ nullable: true })
    cantMin: Number;
    @Field({ nullable: true })
    broadcastMedium: String;
    @Field({ nullable: true })
    typology: String;
    @Field({ nullable: true })
    speaker: String;

    //metalinguisticas
    @Field({ nullable: true })
    dictionaryType: String;
    @Field({ nullable: true })
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
    @Field({ nullable: true })
    support: String;
    @Field({ nullable: true })
    bloque: String;
    @Field({ nullable: true })
    theme: String;
    @Field({ nullable: true })
    publication: String;

    //linguisticas internet
    @Field({ nullable: true })
    URL: String;

    //linguisticas audio o video
    @Field({ nullable: true })
    cantMin: Number;
    @Field({ nullable: true })
    broadcastMedium: String;
    @Field({ nullable: true })
    typology: String;
    @Field({ nullable: true })
    speaker: String;

    //metalinguisticas
    @Field({ nullable: true })
    dictionaryType: String;
    @Field({ nullable: true })
    century: String;
}
