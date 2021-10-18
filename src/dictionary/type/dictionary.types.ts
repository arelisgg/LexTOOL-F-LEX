import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  dictionaryType: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field({ nullable: true })
  image: String;
}


@ObjectType()
export class CreatedDictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  dictionaryType: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field({ nullable: true })
  image: String;

}

@InputType()
export class NewDictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  dictionaryType: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field({ nullable: true })
  image: String; 
}

@InputType()
export class EditedDictionaryType {
  @Field(() => ID)
  id?: String;
  @Field()
  name: String;
  @Field()
  dictionaryType: String;
  @Field()
  description: String;
  @Field()
  state: String;
  @Field({ nullable: true })
  image: String;
}

