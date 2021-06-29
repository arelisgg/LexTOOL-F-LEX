import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const EntrySchema = new Schema({

  letter: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  lemma: {
    type: String,
    required: false,
    default: null,
  },
  UFs: {
    type: String,
    default: null,

  },
  ref: {
    type: String,
    required: false,
  }
});
