import { Document } from 'mongoose';
import { OcurrenceRecord } from 'src/ocurrenceRecord/model/ocurrenceRecord.modelinterface';

export interface Entry extends Document {
 lemma: String;
 letter: String;
 context: String;
 UF: String;
 source: String;
 selected: Boolean;
 documentation: OcurrenceRecord[];
}
