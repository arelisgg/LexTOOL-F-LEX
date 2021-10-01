import { Document } from 'mongoose';
import { Appearence } from "./appearance.class";

export interface OcurrenceRecord extends Document {
    source: String,
    numAppearance: Number,
    appearances: [Appearence],
    isVariation: Boolean,
    variationUF: String,
    status: String,
}
