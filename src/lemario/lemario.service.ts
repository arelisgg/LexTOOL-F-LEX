/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Lemario } from './interface/lemario.interface';
import { CreateLemarioDTO, NewLemarioType } from './dto/lemario.dto';
import { SourcesService } from 'src/sources/sources.service';

@Injectable()
export class LemarioService {
    private readonly SourcesService: SourcesService;
    constructor(
        @InjectModel('Lemario') private readonly lemarioModel: Model<Lemario>,
    ) { }
    async getLemarios(): Promise<Lemario[]> {
        const lemarios = await this.lemarioModel.find();
        return lemarios;
    }
    async getLemario(lemarioID: string): Promise<Lemario> {
        const lemario = await this.lemarioModel.findById(lemarioID);
        return lemario;
    }
    async createLemario(createLemario: NewLemarioType): Promise<Lemario> {
        const SourcesIDs = [];
        NewLemarioType.sources.forEach(async (element) => {
            const newSource = this.SourcesService.createSource(element);
            SourcesIDs.push((await newSource).id);
        });
        const lemario = new this.lemarioModel(createLemario);
        await lemario.save();
        return lemario;
    }

    async updateLemario(
        lemarioID: string,
        createLemarioDTO: CreateLemarioDTO,
    ): Promise<Lemario> {
        const updatedLemario = await this.lemarioModel.findByIdAndUpdate(
            lemarioID,
            createLemarioDTO,
            { new: true },
        );
        return updatedLemario;
    }
    async deleteLemario(lemarioID: string): Promise<Lemario> {
        const deletedLemario = await this.lemarioModel.findByIdAndDelete(lemarioID);
        return deletedLemario;
    }
}
