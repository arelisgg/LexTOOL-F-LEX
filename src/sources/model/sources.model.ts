
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
        default: null,
    },
    bloque: {
        type: String,
        required: false,
        default: null,
    },
    stage: {
        type: String,
        required: false,
        default: null,
    },
    //linguisticas libro o prensa
    theme: {
        type: String,
        required: false,
        default: null,
    },
    provice_p: {
        type: String,
        required: false,
        default: null,
    },
    session_p: {
        type: String,
        required: false,
        default: null,
    },
    magazine_type_p: {
        type: String,
        required: false,
        default: null,
    },

    //linguisticas internet
    URL: {
        type: String,
        required: false,
        default: null,
    },

    //linguisticas audio o video
    cantMin: {
        type: String,
        required: false,
        default: null,
    },
    broadcastMedium: {
        type: String,
        required: false,
        default: null,
    },
    typology: {
        type: String,
        required: false,
        default: null,
    },
    speaker: {
        type: String,
        required: false,
        default: null,
    },
    recording_date: {
        type: String,
        required: false,
        default: null,
    },
    broadcast_date: {
        type: String,
        required: false,
        default: null,
    },

    //metalinguisticas
    dictionaryType: {
        type: String,
        required: false,
        default: null,
    },
    century: {
        type: String,
        required: false,
        default: null,
    },
    library_name: {
        type: String,
        required: false,
        default: null,
    },
    url_location: {
        type: String,
        required: false,
        default: null,
    },
});