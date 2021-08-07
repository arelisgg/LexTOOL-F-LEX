import * as mongoose from 'mongoose';

export const DictionarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
    default: null,
  },
  state: {
    type: String,
    required: true,
    default: null,
  },
  description: {
    type: String,
    required: true,
    default: null,
  },
  lemario: {
    type: String,
    required: false,
    default: null,
  },
});
