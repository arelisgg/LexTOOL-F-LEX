import { Document } from 'mongoose';
import { Lemma } from './lemma.class';

export interface Entry extends Document {
 lemma: [Lemma];
 letter: String[];
 context: String;
 UF: String;
 source: String;
 selected: Boolean;
 criteria: String;
 included: String; 
 frecuency: String;
 documentation: String[];
}
