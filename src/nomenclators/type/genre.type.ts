import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class NewGenreType {
    @Field()
    nombre: String;
}

@ObjectType()
export class GenreType {
    @Field()
    nombre: String;
}