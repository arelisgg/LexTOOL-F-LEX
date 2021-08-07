import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';

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
  
}

