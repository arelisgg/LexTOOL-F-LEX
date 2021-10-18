import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewLemmaType {
    @Field()
    lemma: String;
}

@ObjectType()
export class LemmaType {
    @Field()
    lemma: String;
}
