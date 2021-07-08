import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema({

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
  UF: {
    type: String,
    default: null,
  },
  ref: {
    type: String,
    required: false,
  },
  source:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: null,
    ref: 'Sources',
  },
});
