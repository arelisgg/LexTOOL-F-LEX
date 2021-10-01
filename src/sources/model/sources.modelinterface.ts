import { Document } from 'mongoose';

export interface Sources extends Document {
     name: String;
     ref: String;
     type: String;
     subType: String;
     support: String;

     // linguisticas libro o prensa
     bloque: String;
     theme: String;
     provice_p: String;
     session_p: String;
     magazine_type_p: String;

     //linguisticas internet
     URL: String;

     //linguisticas audio o video
     cantMin: String;
     broadcastMedium: String;
     typology: String;
     speaker: String;
     recording_date: String;
     broadcast_date: String;

     //metalinguisticas
     dictionaryType: String;
     century: String;
     library_name: String;
     url_location: String;
}
