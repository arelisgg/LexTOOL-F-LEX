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
        return await this.OcurrenceRecordModel.findById(orID);
    }

    createOcurrenceRecord(newOcurrenceRecord: NewOcurrenceRecordType) {
        const {
            corpus_treasure,
            appearances,
            isVariation,
            numAppearance,
            numSources,
            variationUF,
        } = newOcurrenceRecord;
        const or = new this.OcurrenceRecordModel({
            corpus_treasure,
            appearances,
            isVariation,
            numAppearance,
            numSources,
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
}
