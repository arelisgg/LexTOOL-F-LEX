
import * as mongoose from 'mongoose';

export const SourcesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ref: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    subType:{
        type: String,
        required: false,
    },
});