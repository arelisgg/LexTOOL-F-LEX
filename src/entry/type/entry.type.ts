import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { LemmaType, NewLemmaType } from './lemma.type';


@ObjectType()
export class EntryType {
  @Field(() => ID)
  id?: String;
  @Field(()=>[String],{ nullable: true })
  letter: [String];
  @Field(() => [LemmaType],{ nullable: true })
  lemma: [LemmaType];
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
  @Field()
  selected: Boolean;
  @Field({ nullable: true })
  criteria: String;
  @Field({ nullable: true })
  included: String;
  @Field({ nullable: true })
  frecuency: String;
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
}

@ObjectType()
export class CreatedEntryType {
  @Field(() => ID)
  id?: String;
  @Field(() => [LemmaType],{ nullable: true })
  lemma: [LemmaType];
  @Field(()=>[String],{ nullable: true })
  letter: [String];
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
  @Field()
  selected: Boolean;
  @Field({ nullable: true })
  criteria: String;
  @Field({ nullable: true })
  included: String;
  @Field({ nullable: true })
  frecuency: String;
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
}

@InputType()
export class NewEntryType {
  @Field(() => [NewLemmaType],{ nullable: true })
  lemma: [NewLemmaType];
  @Field(()=>[String],{ nullable: true })
  letter: [String];
  @Field()
  context: String;
  @Field()
  UF: String;
  @Field()
  source: String;
  @Field()
  selected: Boolean;
  @Field({ nullable: true })
  criteria: String;
  @Field({ nullable: true })
  included: String;
  @Field({ nullable: true })
  frecuency: String;
}

@InputType()
export class EditedEntryType {
  @Field(() => ID)
  id?: String;
  @Field(() => [NewLemmaType],{ nullable: true })
  lemma: [NewLemmaType];
  @Field(()=>[String],{ nullable: true })
  letter: [String];
  @Field({ nullable: true })
  context: String;
  @Field({ nullable: true })
  UF: String;
  @Field({ nullable: true })
  source: String;  
  @Field({ nullable: true })
  selected: Boolean;
  @Field({ nullable: true })
  criteria: String;
  @Field({ nullable: true })
  included: String;
  @Field({ nullable: true })
  frecuency: String;
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
}
