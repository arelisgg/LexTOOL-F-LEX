/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Sources } from './model/sources.modelinterface';
import { CreatedSourcesType, SourcesType ,NewSourcesType } from './type/sources.type';

@Injectable()
export class SourcesService {
    constructor(
        @InjectModel('Sources') private readonly sourcesModel: Model<Sources>,
    ) { }
  
    async findAllSources() {
        const e = await this.sourcesModel.find();
        return e;
    }

    async createSource(createSources: CreatedSourcesType): Promise<CreatedSourcesType> {
       const {file,name,ref,}=createSources;
       const source= new this.sourcesModel({name,file,ref,});
       await source.save();
       return source;
    }

  //  async updateSource(
   //     sourceID: string,
   //     createSourcesDTO: CreateSourcesDTO,
   // ): Promise<Sources> {
   //     const updatedSource = await this.sourcesModel.findByIdAndUpdate(
   //         sourceID,
   //         createSourcesDTO,
  //          { new: true },
   //     );
   //     return updatedSource;
   // }


    async deleteSource(sourceID: string): Promise<SourcesType> {
        const deletedSource = await this.sourcesModel.findByIdAndDelete(sourceID);
        return deletedSource;
    }
}


