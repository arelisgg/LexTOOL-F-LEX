import * as mongoose from 'mongoose';

export const NomenclatorSchema = new mongoose.Schema({

    themes: {
        type: [{
            nombre: String,
        }],
        required: true,
        default: null,
    },
    genres: {
        type: [{
            nombre: String,
        }],
        required: true,
        default: null,
    },
    sessions_p: {
        type: [{
            nombre: String,
        }],
        required: true,
        default: null,
    },
    dictionaryTypes: {
        type: [{
            nombre: String,
        }],
        required: true,
        default: null,
    },
    typologies: {
        type: [{
            nombre: String,
        }],
        required: true,
        default: null,
    },

});
