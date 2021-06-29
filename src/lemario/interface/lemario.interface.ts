import { Document } from 'mongoose';

export interface Lemario extends Document {
    readonly name: string;
    readonly sources: string[];
    readonly dictionaryType: string;
}