import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { NewOcurrenceRecordType, OcurrenceRecordType } from 'src/ocurrenceRecord/type/ocurrenceRecord.type';


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
  @Field()
  selected: Boolean;
  @Field(()=>[OcurrenceRecordType],{ nullable: true })
  documentation: OcurrenceRecordType[];
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
  @Field()
  selected: Boolean;
  @Field(()=>[OcurrenceRecordType],{ nullable: true })
  documentation: OcurrenceRecordType[];
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
  @Field()
  selected: Boolean;
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
  @Field()
  selected: Boolean;
}
