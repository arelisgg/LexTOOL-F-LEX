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
  letters: {
     type: [String],
     required: true 
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
  sources: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: null,
    ref: 'Sources',
  },
  lemario: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: null,
    ref: 'Lemario',
  },
});
