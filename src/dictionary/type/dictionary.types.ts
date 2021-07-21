import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { LemarioType, NewLemarioType } from 'src/lemario/type/lemario.type';
import { DictionarySourcesType, InputDictionarySourcesType, NewSourcesType } from 'src/sources/type/sources.type';

@ObjectType()
export class DictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  reference: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field(() => [String])
  letters: [String];
  @Field(() => [DictionarySourcesType])
  sources: DictionarySourcesType[];
  @Field(()=> LemarioType)
  lemario: LemarioType;
}


@ObjectType()
export class CreatedDictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  reference: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field(() => [String])
  letters: [String];
  @Field(() => [String])
  sources: String[];
  @Field(()=> LemarioType)
  lemario: LemarioType;

}

@InputType()
export class NewDictionaryType {
  @Field()
  name: String;
  @Field()
  reference: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field(() => [String])
  letters: [String];
  @Field(() => [NewSourcesType], { nullable: true })
  sources: NewSourcesType[];
 
}

@InputType()
export class EditedDictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  reference: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field(() => [String])
  letters: [String];
  @Field(() => [InputDictionarySourcesType], { nullable: true })
  sources: InputDictionarySourcesType[];

}

