import { Document } from 'mongoose';

export interface Entry extends Document {
  readonly lemma: String;
  readonly letter: String;
  readonly ref: String;
  readonly context: String;
  readonly UF: String;
  readonly source: String;
}
