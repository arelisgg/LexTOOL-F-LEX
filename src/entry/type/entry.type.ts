import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { EntrySourcesType } from 'src/sources/type/sources.type';


@ObjectType()
export class EntryType {
  @Field(() => ID)
  id?: String;
  @Field()
  lemma: String;
  @Field()
  letter: String;
  @Field()
  ref: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field(()=> EntrySourcesType)
  source: EntrySourcesType;
 }

@ObjectType()
export class CreatedEntryType {
  @Field(() => ID)
  id?: String;
  @Field()
  lemma: String;
  @Field()
  letter: String;
  @Field()
  ref: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field(()=> EntrySourcesType)
  source: EntrySourcesType;
}

@InputType()
export class NewEntryType {
  @Field()
  lemma: String;
  @Field()
  letter: String;
  @Field()
  ref: String;
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field(()=> String)
  source: String;

}
