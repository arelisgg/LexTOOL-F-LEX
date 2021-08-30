import * as mongoose from 'mongoose';


export const LemarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: null,
    },
    entries:{
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
        default: [null],
        ref: 'Entry',
    },
});