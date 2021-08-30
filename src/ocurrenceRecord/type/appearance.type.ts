import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewAppearanceType {
    @Field()
    useContext: String;
    @Field()
    contextSource: String;
}

@ObjectType()
export class AppearanceType {
    @Field()
    useContext: String;
    @Field()
    contextSource: String;
}
