/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Sources } from './interface/sources.interface';
import { CreateSourcesDTO, NewSourcesType } from './dto/sources.dto';

@Injectable()
export class SourcesService {
    constructor(
        @InjectModel('Sources') private readonly sourcesModel: Model<Sources>,
    ) { }
    async getSources(): Promise<Sources[]> {
        const sources = await this.sourcesModel.find();
        return sources;
    }
    async getSource(sourceID: string): Promise<Sources> {
        const source = await this.sourcesModel.findById(sourceID);
        return source;
    }
    async createSource(createSources: NewSourcesType): Promise<Sources> {
        const source = new this.sourcesModel(createSources);
        await source.save();
        return source;
    }
    async updateSource(
        sourceID: string,
        createSourcesDTO: CreateSourcesDTO,
    ): Promise<Sources> {
        const updatedSource = await this.sourcesModel.findByIdAndUpdate(
            sourceID,
            createSourcesDTO,
            { new: true },
        );
        return updatedSource;
    }
    async deleteSource(sourceID: string): Promise<Sources> {
        const deletedSource = await this.sourcesModel.findByIdAndDelete(sourceID);
        return deletedSource;
    }
}


