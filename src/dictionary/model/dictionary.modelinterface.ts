import { Document } from 'mongoose';


export interface Dictionary extends Document {
  name: String;
  reference: String;
  letters: [String];
  sources: String[];
  description: String;
  state: String;
  lemario: String;
}
