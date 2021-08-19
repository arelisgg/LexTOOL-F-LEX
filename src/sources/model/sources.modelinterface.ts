import { Document } from 'mongoose';

export interface Sources extends Document {
     name: String;
     ref: String;
     file: String;
     type: String;
     subType: String;
     support: String;

     // linguisticas libro o prensa
     bloque: String;
     theme: String;
     publication: String;

     //linguisticas internet
     URL: String;

     //linguisticas audio o video
     cantMin: Number;
     broadcastMedium: String;
     typology: String;
     speaker: String;

     //metalinguisticas
     dictionaryType: String;
     century: String;
}
