
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
        required: false,
    },
    type: {
        type: String,
        required: true,
    },
    subType: {
        type: String,
        required: true,
    },
    support: {
        type: String,
        required: false,
    },
    bloque: {
        type: String,
        required: false,
    },
    year: {
        type: Number,
        required: false,
    },
    author: {
        type: [{ name: String, siglas: String }],
        required: false,
        default: null,
    },
    title: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    theme: {
        type: String,
        required: false,
    },
    publication: {
        type: String,
        required: false,
    },

    //linguisticas internet
    URL: {
        type: String,
        required: false,
    },

    //linguisticas audio o video
    date: {
        type: String,
        required: false,
    },
    cantMin: {
        type: String,
        required: false,
    },
    broadcastMedium: {
        type: String,
        required: false,
    },
    typology: {
        type: String,
        required: false,
    },
    speaker: {
        type: String,
        required: false,
    },

    //metalinguisticas
    dictionaryType: {
        type: String,
        required: false,
    },
    century: {
        type: String,
        required: false,
    },
});