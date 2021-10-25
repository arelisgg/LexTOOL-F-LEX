import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Dictionary {
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
export class CreatedDictionary {
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
export class NewDictionary {
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
export class EditedDictionary {
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

