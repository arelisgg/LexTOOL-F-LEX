import { Document } from 'mongoose';

export interface Dictionary extends Document {
  name: String;
  dictionaryType: String;
  description: String;
  state: String;
  image: String;
}
