import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OcurrenceRecord } from './model/ocurrenceRecord.modelinterface';
import { CreatedOcurrenceRecordType, NewOcurrenceRecordType, OcurrenceRecordType } from './type/ocurrenceRecord.type';

@Injectable()
export class OcurrenceRecordService {
    constructor(
        @InjectModel('OcurrenceRecord') private OcurrenceRecordModel: Model<OcurrenceRecord>,
    ) { }

    async findAll() {
        return await this.OcurrenceRecordModel.find();
    }

    async findByID(orID: String) {
       let or = await this.OcurrenceRecordModel.findById(orID);
       return or;
    }

    createOcurrenceRecord(newOcurrenceRecord: NewOcurrenceRecordType) {
        const {
            source,
            appearances,
            isVariation,
            numAppearance,
            variationUF,
        } = newOcurrenceRecord;
        const or = new this.OcurrenceRecordModel({
            source,
            appearances,
            isVariation,
            numAppearance,
            variationUF,
        });
        or.save();
        return or;
    }

    async deleteOcurrenceRecordByID(orID: String) {
        const or = await this.OcurrenceRecordModel.findById(orID);
        console.log('or:', or);
        if (!or) {
            throw new Error(`El Registro de ocurrencias con id ${orID} no existe`);
        } else {
            or.deleteOne();
            return or;
        }
    }

    editOcurrenceRecord(newOcurrenceRecord: OcurrenceRecordType) {
        this.OcurrenceRecordModel.findByIdAndUpdate(
            newOcurrenceRecord.id,
            newOcurrenceRecord,
        ).exec();
    }

    async editORAppearances(newOcurrenceRecord: OcurrenceRecordType) {
        let old = await this.OcurrenceRecordModel
          .findById(newOcurrenceRecord.id)
          .exec();
        let a = newOcurrenceRecord.appearances;
        let aOld = old.appearances;
        if (old) {
          for (let index = 0; index < a.length; index++) {
            let isIncluded = aOld.includes(a[index]);
            if (!isIncluded) {
                old.appearances.push(a[index]);
            }
          }
          old.save();
          return old;
        } else {
          throw new Error('No existe la entrada');
        }
      }
    
}
