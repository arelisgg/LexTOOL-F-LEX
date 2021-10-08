import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';
import { AppearanceType, NewAppearanceType } from './appearance.type';

@ObjectType()
export class OcurrenceRecordType {
    @Field(() => ID)
    id?: String;
    @Field()
    source: String;
    @Field()
    numAppearance: Number;
    @Field(() => [AppearanceType],{ nullable: true })
    appearances: [AppearanceType];
    @Field({ nullable: true })
    isVariation: Boolean;
    @Field({ nullable: true })
    variationUF: String;
}

@ObjectType()
export class CreatedOcurrenceRecordType {
    @Field(() => ID)
    id?: String;
    @Field()
    source: String;
    @Field()
    numAppearance: Number;
    @Field(() => [AppearanceType], { nullable: true })
    appearances: [AppearanceType];
    @Field({ nullable: true })
    isVariation: Boolean;
    @Field({ nullable: true })
    variationUF: String;
}

@InputType()
export class NewOcurrenceRecordType {
    @Field()
    source: String;
    @Field()
    numAppearance: Number;
    @Field(() => [NewAppearanceType], { nullable: true })
    appearances: [NewAppearanceType];
    @Field({ nullable: true })
    isVariation: Boolean;
    @Field({ nullable: true })
    variationUF: String;
}

@InputType()
export class EditedOcurrenceRecordType {
    @Field(() => ID)
    id?: String;
    @Field()
    source: String;
    @Field()
    numAppearance: Number;
    @Field(() => [NewAppearanceType], { nullable: true })
    appearances: [NewAppearanceType];
    @Field({ nullable: true })
    isVariation: Boolean;
    @Field({ nullable: true })
    variationUF: String;
}
