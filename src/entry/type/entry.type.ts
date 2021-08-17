import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class EntryType {
  @Field(() => ID)
  id?: String;
  @Field()
  lemma: String;
  @Field({ nullable: true })
  letter: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
 }

@ObjectType()
export class CreatedEntryType {
  @Field(() => ID)
  id?: String;
  @Field()
  lemma: String;
  @Field({ nullable: true })
  letter: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
}

@InputType()
export class NewEntryType {
  @Field()
  lemma: String;
  @Field({ nullable: true })
  letter: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
}

@InputType()
export class EditedEntryType {
  @Field(() => ID)
  id?: String;
  @Field()
  lemma: String;
  @Field({ nullable: true })
  letter: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;

}
