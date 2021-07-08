import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { SourcesType } from 'src/sources/type/sources.type';



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
  @Field(()=> SourcesType)
  source: SourcesType;
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
  @Field(()=> SourcesType)
  source: SourcesType;
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
