import * as mongoose from 'mongoose';


export const LemarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dictionaryType: {
        type: String,
        required: true,
    },
    entries:{
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        default: [null],
        ref: 'Entry',
    }
});