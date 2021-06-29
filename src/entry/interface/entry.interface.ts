import { Document } from 'mongoose';

export interface Entry extends Document {
  readonly lemma: string;
  readonly letter: string;
  readonly ref: string;
  readonly context: string;
  readonly UF: string;
}
