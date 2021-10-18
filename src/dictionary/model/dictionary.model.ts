import * as mongoose from 'mongoose';

export const DictionarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: null,
  },
  state: {
    type: String,
    required: true,
  },
  dictionaryType: {
    type: String,
    required: true,
    default: null,
  },
  image: {
    type: String,
    required: true,
  },
});
