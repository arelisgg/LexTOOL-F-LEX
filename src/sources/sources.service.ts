import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Sources } from './model/sources.modelinterface';
import { CreatedSourcesType, EditedSource, NewSourcesType, TypeSource } from './type/sources.type';

@Injectable()
export class SourcesService {
  constructor(
    @InjectModel('Sources') private readonly sourcesModel: Model<Sources>,
  ) { }

  async findAllSources() {
    const e = await this.sourcesModel.find();
    return e;
  }

  async createSource(source: NewSourcesType): Promise<TypeSource> {
    const {
      file,
      name,
      ref,
      type,
      subType,
      support,
      bloque,
      theme,
      publication,

      //linguisticas internet
      URL,

      //linguisticas audio o video
      cantMin,
      broadcastMedium,
      typology,
      speaker,

      //metalinguisticas
      dictionaryType,
      century,
    } = source;
    const s = new this.sourcesModel({
      file,
      name,
      ref,
      type,
      subType,
      support,
      bloque,
      theme,
      publication,

      //linguisticas internet
      URL,

      //linguisticas audio o video
      cantMin,
      broadcastMedium,
      typology,
      speaker,

      //metalinguisticas
      dictionaryType,
      century,
    });
    await s.save();
    return s;
  }

  async createDictionarySource(source: NewSourcesType): Promise<TypeSource> {
    const {
      file,
      name,
      ref,
      type,
      subType,

      //linguisticas libro o prensa
      support,
      bloque,
      theme,
      publication,

      //linguisticas internet
      URL,

      //linguisticas audio o video
      cantMin,
      broadcastMedium,
      typology,
      speaker,

      //metalinguisticas
      dictionaryType,
      century
    } = source;
    const s = new this.sourcesModel({
      file,
      name,
      ref,
      type,
      subType,

      //linguisticas libro o prensa
      support,
      bloque,
      theme,
      publication,

      //linguisticas internet
      URL,

      //linguisticas audio o video
      cantMin,
      broadcastMedium,
      typology,
      speaker,

      //metalinguisticas
      dictionaryType,
      century
    });
    await s.save();
    return s;
  }

  async findByID(sourceID: String): Promise<TypeSource> {
    const source = await this.sourcesModel.findById(sourceID);
    return source;
  }

  async deleteSource(SourceID: String) {
    const s = await this.sourcesModel.findById(SourceID);
    if (!s) {
      throw new Error(`Fuente con id: ${SourceID} no existe`);
    }
    const deletedSource = await s.deleteOne();
    console.log(deletedSource);
    return deletedSource;
  }

  async editSource(newSource: EditedSource) {
    let oldSource = await this.sourcesModel
      .findById(newSource.id)
      .exec();
    if (oldSource) {
      oldSource.file = newSource.file;
      oldSource.ref = newSource.ref;
      oldSource.name = newSource.name;
      oldSource.type = newSource.type;
      oldSource.subType = newSource.subType;

      //linguisticas libro o prensa
      oldSource.support = newSource.support;
      oldSource.bloque = newSource.bloque;
      oldSource.theme = newSource.theme;
      oldSource.publication = newSource.publication;
      
      //linguisticas internet
      oldSource.URL = newSource.URL;
      
      //linguisticas audio o video
      oldSource.cantMin = newSource.cantMin;
      oldSource.broadcastMedium = newSource.broadcastMedium;
      oldSource.typology = newSource.typology;
      oldSource.speaker = newSource.speaker;

      //metalinguisticas
      oldSource.dictionaryType = newSource.dictionaryType;
      oldSource.century = newSource.century;
      
      oldSource.save();
      console.log('oldSource:', oldSource);

      return oldSource;
    } else {
      throw new Error('No existe la Fuente');
    }
  }
}