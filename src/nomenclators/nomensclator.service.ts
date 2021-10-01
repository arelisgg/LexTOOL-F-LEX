import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nomenclator } from './model/nomenclator.modelinterface';
import { NewDictionaryTypeType } from './type/dictionaryType.type';
import { NewGenreType } from './type/genre.type';
import { NewNomenclatorType, NomenclatorType } from './type/nomenclator.type';
import { NewSession_pType } from './type/session_p.type';
import { NewThemeType } from './type/theme.type';
import { NewTypologyType } from './type/typology.type';

@Injectable()
export class NomenclatorService {
    constructor(
        @InjectModel('Nomenclator') private NomenclatorModel: Model<Nomenclator>,
    ) { }

    async createNomenclator(newNomenclator: NewNomenclatorType) {
        const {
            dictionaryTypes, sessions_p, themes, typologies, genres
        } = newNomenclator;

        const n = new this.NomenclatorModel({
            dictionaryTypes, sessions_p, themes, typologies, genres
        });
        await n.save();
        return n;
    }

    async findAllThemes() {
        const n = await this.NomenclatorModel.findOne();
        const t = n.themes;
        return t;
    }
    async findAllGenres() {
        const n = await this.NomenclatorModel.findOne();
        const g = n.genres;
        return g;
    }
    async findAllDictionaryTypes() {
        const n = await this.NomenclatorModel.findOne();
        const dt = n.dictionaryTypes;
        return dt;
    }
    async findAllSessionsP() {
        const n = await this.NomenclatorModel.findOne();
        const sp = n.sessions_p;
        return sp;
    }
    async findAllTypologies() {
        const n = await this.NomenclatorModel.findOne();
        const ty = n.typologies;
        return ty;
    }

    async addTheme(newTheme: NewThemeType): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        n.themes.push(newTheme);
        await n.save();
        return n;
    }
    async addGenres(newGenre: NewGenreType): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        n.genres.push(newGenre);
        await n.save();
        return n;
    }
    async addDictionaryType(newDictionaryType: NewDictionaryTypeType): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        n.dictionaryTypes.push(newDictionaryType);
        await n.save();
        return n;
    }
    async addSessionP(newSessionP: NewSession_pType): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        n.sessions_p.push(newSessionP);
        await n.save();
        return n;
    }
    async addTypology(newTypology: NewTypologyType): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        n.typologies.push(newTypology);
        await n.save();
        return n;
    }

    async deleteTheme(nombre: String): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        let f = false;
        let t = n.themes;
        for (let j = 0; j < t.length && f === false; j++) {
            const e = t[j];
            if(e.nombre === nombre){
                f= true;
                n.themes.splice(j, 1);
            }
        }
        await n.save();
        return n;
    }
    async deleteGenre(nombre: String): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        let f = false;
        let g = n.genres;
        for (let j = 0; j < g.length && f === false; j++) {
            const e = g[j];
            if(e.nombre === nombre){
                f= true;
                n.genres.splice(j, 1);
            }
        }
        await n.save();
        return n;
    }
    async deleteSessionP(nombre: String): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        let f = false;
        let s = n.sessions_p;
        for (let j = 0; j < s.length && f === false; j++) {
            const e = s[j];
            if(e.nombre === nombre){
                f= true;
                n.sessions_p.splice(j, 1);
            }
        }
        await n.save();
        return n;
    }
    async deleteTypology(nombre: String): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        let f = false;
        let ty = n.typologies;
        for (let j = 0; j < ty.length && f === false; j++) {
            const e = ty[j];
            if(e.nombre === nombre){
                f= true;
                n.typologies.splice(j, 1);
            }
        }
        await n.save();
        return n;
    }
    async deleteDictionaryType(nombre: String): Promise<NomenclatorType> {
        const n = await this.NomenclatorModel.findOne();
        let f = false;
        let dt = n.dictionaryTypes;
        for (let j = 0; j < dt.length && f === false; j++) {
            const e = dt[j];
            if(e.nombre === nombre){
                f = true;
                n.dictionaryTypes.splice(j, 1);
            }
        }
        await n.save();
        return n;
    }
}
