import { Document } from 'mongoose';

import { DictionaryType } from "./dictionaryType.class";
import { Genre } from './genre.class';
import { Session_p } from "./session_p.class";
import { Theme } from "./theme.class";
import { Typology } from "./typology.class";

export interface Nomenclator extends Document {
    themes: [Theme],
    sessions_p: [Session_p],
    dictionaryTypes: [DictionaryType],
    typologies: [Typology],
    genres: [Genre],
}
