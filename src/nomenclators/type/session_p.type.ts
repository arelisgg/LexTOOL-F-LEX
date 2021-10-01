import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewSession_pType {
    @Field()
    nombre: String;
}

@ObjectType()
export class Session_pType {
    @Field()
    nombre: String;
}