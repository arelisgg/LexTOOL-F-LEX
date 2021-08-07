import { Document } from 'mongoose';

export interface Entry extends Document {
 lemma: String;
 letter: String;
 context: String;
 UF: String;
 source: String;
}
