import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const LemarioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sources: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Sources',
    },
    dictionaryType: {
        type: String,
        required: true,
    },
});