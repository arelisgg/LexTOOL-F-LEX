import * as mongoose from 'mongoose';

export const OcurrenceRecordSchema = new mongoose.Schema({

  corpus_treasure: {
    type: String,
    required: true,
    default: null,
  },
  numAppearance: {
    type: Number,
    required: true,
    default: 0,
  },
  numSources: {
    type: Number,
    required: true,
    default: 0,
  },
  appearances: {
    type: [{
      useContext: String,
      contextSource: String,
    }],
    required: true,
    default: null,
  },
  isVariation: {
    type: Boolean,
    required: false,
  },
  variationUF: {
    type: String,
    required: false,
  },
});
