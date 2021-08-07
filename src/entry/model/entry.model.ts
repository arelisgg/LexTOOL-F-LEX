import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema({

  letter: {
    type: String,
    required: false,
    default: null,
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
  source:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: null,
    ref: 'Sources',
  },
});
