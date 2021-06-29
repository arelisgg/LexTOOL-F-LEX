/* eslint-disable prettier/prettier */
import { InputType, Field, ID } from '@nestjs/graphql';

export class SourcesType {
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    ref: string;
    @Field()
    file: string;
}

@InputType()
export class NewSourcesType {
    @Field()
    name: string;
    @Field()
    ref: string;
    @Field()
    file: string;
}

export class CreateSourcesDTO {
    readonly name: string;
    readonly ref: string;
    readonly file: string;
}
