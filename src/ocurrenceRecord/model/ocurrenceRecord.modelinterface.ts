import { Document } from 'mongoose';
import { Appearence } from "./appearance.class";

export interface OcurrenceRecord extends Document {
    corpus_treasure: String,
    numAppearance: Number,
    numSources: Number,
    appearances: [Appearence],
    isVariation: Boolean,
    variationUF: String,
}
