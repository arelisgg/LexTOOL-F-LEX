import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
//import { EditedOcurrenceRecordType, OcurrenceRecordType } from 'src/ocurrenceRecord/type/ocurrenceRecord.type';


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
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
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
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
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
  @Field({ nullable: true })
  lemma: String;
  @Field({ nullable: true })
  letter: String;
  @Field({ nullable: true })
  context: String;
  @Field({ nullable: true })
  UF: String;
  @Field({ nullable: true })
  source: String;  
  @Field({ nullable: true })
  selected: Boolean;
  @Field(()=>[String],{ nullable: true })
  documentation: String[];
}
