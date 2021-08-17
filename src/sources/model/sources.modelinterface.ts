import { Document } from 'mongoose';
import { Author } from './author.class';

export interface Sources extends Document {
     name: String;
     ref: String;
     file: String;
     type: String;
     subType: String;
     support: String;

     // linguisticas libro o prensa
     bloque: String;
     year: Number;
     author: [Author];
     title: String;
     country: String;
     theme: String;
     publication: String;

     //linguisticas internet
     URL: String;

     //linguisticas audio o video
     date: Date; 
     cantMin: Number;
     broadcastMedium: String;
     typology: String;
     speaker: String;

     //metalinguisticas
     dictionaryType: String;
     century: String;
}
