import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
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
  @Field(() => [DictionarySourcesType])
  sources: DictionarySourcesType[];
  @Field({ nullable: true })
  lemario: String;
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
  sources: String[];
  @Field({ nullable: true })
  lemario: String;

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
  @Field(() => [InputDictionarySourcesType], { nullable: true })
  sources: InputDictionarySourcesType[];

}

