import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewTypologyType {
    @Field()
    nombre: String;
}

@ObjectType()
export class TypologyType {
    @Field()
    nombre: String;
}