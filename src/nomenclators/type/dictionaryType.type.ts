import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewDictionaryTypeType {
    @Field()
    nombre: String;
}

@ObjectType()
export class DictionaryTypeType {
    @Field()
    nombre: String;
}