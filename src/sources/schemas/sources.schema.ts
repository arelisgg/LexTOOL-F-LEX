import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const SourcesSchema = new Schema({
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
});