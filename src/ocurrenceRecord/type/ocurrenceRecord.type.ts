import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { AppearanceType, NewAppearanceType } from './appearance.type';

@ObjectType()
export class OcurrenceRecordType {
    @Field(() => ID)
    id?: String;
    @Field()
    corpus_treasure: String;
    @Field()
    numAppearance: Number;
    @Field()
    numSources: Number;
    @Field(() => [AppearanceType])
    appearances: [AppearanceType];
    @Field()
    isVariation: Boolean;
    @Field()
    variationUF: String;
}

@ObjectType()
export class CreatedOcurrenceRecordType {
    @Field(() => ID)
    id?: String;
    @Field()
    corpus_treasure: String;
    @Field()
    numAppearance: Number;
    @Field()
    numSources: Number;
    @Field(() => [AppearanceType])
    appearances: [AppearanceType];
    @Field()
    isVariation: Boolean;
    @Field()
    variationUF: String;
}

@InputType()
export class NewOcurrenceRecordType {
    @Field()
    corpus_treasure: String;
    @Field()
    numAppearance: Number;
    @Field()
    numSources: Number;
    @Field(() => [NewAppearanceType])
    appearances: [NewAppearanceType];
    @Field()
    isVariation: Boolean;
    @Field()
    variationUF: String;
}
