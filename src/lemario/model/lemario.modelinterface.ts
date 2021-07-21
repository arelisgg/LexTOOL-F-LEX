import { Document } from 'mongoose';

export interface Lemario extends Document {
    name: String;
    dictionaryType: String;
    entries: String[];
}
