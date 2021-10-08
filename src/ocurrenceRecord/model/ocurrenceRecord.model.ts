import * as mongoose from 'mongoose';

export const OcurrenceRecordSchema = new mongoose.Schema({

  source: {
    type: String,
    required: true,
    default: null,
  },
  numAppearance: {
    type: Number,
    required: true,
    default: 0,
  },
  appearances: {
    type: [{
      useContext: String,
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
