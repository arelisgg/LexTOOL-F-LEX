import { Document } from 'mongoose';

export interface Entry extends Document {
 lemma: String;
 letter: String;
 ref: String;
 context: String;
 UF: String;
 source: String;
}
