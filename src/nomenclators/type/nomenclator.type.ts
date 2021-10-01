import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';

import { DictionaryTypeType, NewDictionaryTypeType } from './dictionaryType.type';
import { GenreType, NewGenreType } from './genre.type';
import { NewSession_pType, Session_pType } from './session_p.type';
import { NewThemeType, ThemeType } from './theme.type';
import { NewTypologyType, TypologyType } from './typology.type';

@ObjectType()
export class NomenclatorType {
    @Field(() => ID)
    id?: String;
    @Field(() => [ThemeType],{ nullable: true })
    themes: [ThemeType];
    @Field(() => [GenreType],{ nullable: true })
    genres: [GenreType];
    @Field(() => [Session_pType],{ nullable: true })
    sessions_p: [Session_pType];
    @Field(() => [DictionaryTypeType],{ nullable: true })
    dictionaryTypes: [DictionaryTypeType];
    @Field(() => [TypologyType],{ nullable: true })
    typologies: [TypologyType];
}

@InputType()
export class NewNomenclatorType {
    @Field(() => [NewThemeType],{ nullable: true })
    themes: [NewThemeType];
    @Field(() => [NewGenreType],{ nullable: true })
    genres: [NewGenreType];
    @Field(() => [NewSession_pType],{ nullable: true })
    sessions_p: [NewSession_pType];
    @Field(() => [NewDictionaryTypeType],{ nullable: true })
    dictionaryTypes: [NewDictionaryTypeType];
    @Field(() => [NewTypologyType],{ nullable: true })
    typologies: [NewTypologyType];
}
