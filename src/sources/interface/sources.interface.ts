import { Document } from 'mongoose';

export interface Sources extends Document {
    readonly name: string;
    readonly ref: string;
    readonly file: string;
}