/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Sources } from './model/sources.modelinterface';
import { CreatedSourcesType, NewSourcesType, TypeSource } from './type/sources.type';

@Injectable()
export class SourcesService {
    constructor(
        @InjectModel('Sources') private readonly sourcesModel: Model<Sources>,
    ) { }
  
    async findAllSources() {
        const e = await this.sourcesModel.find();
        return e;
    }

    async createSource(source: NewSourcesType): Promise<CreatedSourcesType> {
       const {file,name,ref,}=source;
       const s= new this.sourcesModel({name,file,ref,});
       await s.save();
       return s;
    }

    async findByID(sourceID: String) : Promise <TypeSource>{
        const entry = await this.sourcesModel.findById(sourceID);
        return entry;
     }

}


