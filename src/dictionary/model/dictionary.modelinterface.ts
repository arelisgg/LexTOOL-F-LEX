import { Document } from 'mongoose';


export interface Dictionary extends Document {
  name: String;
  reference: String;
  description: String;
  state: String;
  lemario: String;
}
