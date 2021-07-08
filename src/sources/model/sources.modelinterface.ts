import { Document } from 'mongoose';

export interface Sources extends Document {
    readonly name: String;
    readonly ref: String;
    readonly file: String;
}