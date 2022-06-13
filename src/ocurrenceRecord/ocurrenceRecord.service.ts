import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OcurrenceRecord } from './model/ocurrenceRecord.modelinterface';
import { CreatedOcurrenceRecordType, EditedOcurrenceRecordType, NewOcurrenceRecordType, OcurrenceRecordType } from './type/ocurrenceRecord.type';

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

    async editOcurrenceRecord(newOcurrenceRecord: OcurrenceRecordType) {
        let oldOR = await this.OcurrenceRecordModel
        .findById(newOcurrenceRecord.id)
        .exec();  
      if (oldOR) {
        oldOR.source = newOcurrenceRecord.source;
        oldOR.appearances = newOcurrenceRecord.appearances;
        oldOR.isVariation = newOcurrenceRecord.isVariation;
        oldOR.numAppearance = newOcurrenceRecord.appearances.length;
        oldOR.variationUF = newOcurrenceRecord.variationUF;
        await oldOR.save();
        console.log('oldOR:', oldOR);
        return oldOR;
      } else {
        throw new Error('No existe la registro de Ocurrencia');
      }
    }

    async editORAppearances(newOcurrenceRecord: EditedOcurrenceRecordType) {
        let old = await this.OcurrenceRecordModel
            .findById(newOcurrenceRecord.id)
            .exec();
        let a = newOcurrenceRecord.appearances;
        let aOld = old.appearances;
        if (old) {
            for (let index = 0; index < a.length; index++) {
                let b = a[index].useContext;
                let f = false;
                for (let i = 0; i < aOld.length; i++) {
                    const element = aOld[i].useContext;
                    if (b === element) {
                        f = true;
                    }
                }
                if (!f) {
                    old.appearances.push(a[index]);
                }
            }
            old.numAppearance = old.appearances.length;
            old.save();
            return old;
        } else {
            throw new Error('No existe la entrada');
        }
    }

}
