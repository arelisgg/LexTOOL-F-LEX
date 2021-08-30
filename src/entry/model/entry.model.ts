import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema({

  letter: {
    type: String,
    required: false,
    default: null,
  },
  context: {
    type: String,
    required: false,
    default: null,
  },
  lemma: {
    type: String,
    required: false,
    default: null,
  },
  UF: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
    default: false,
  },
  documentation: {
    type: [mongoose.Schema.Types.ObjectId],
    required: false,
    ref: 'OcurrenceRecord',
  }
});
