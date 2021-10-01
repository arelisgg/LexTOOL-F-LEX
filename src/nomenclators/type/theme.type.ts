import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class NewThemeType {
    @Field()
    nombre: String;
}

@ObjectType()
export class ThemeType {
    @Field()
    nombre: String;
}
