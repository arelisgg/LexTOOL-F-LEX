import { Document } from 'mongoose';

export interface Lemario extends Document {
    readonly name: String;
    readonly dictionaryType: String;
    readonly entries: String[];
}
