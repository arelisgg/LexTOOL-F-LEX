import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Sources } from './model/sources.modelinterface';
import { CreatedSourcesType, NewSourcesType, EditedSource, TypeSource } from './type/sources.type';

@Injectable()
export class SourcesService {
  constructor(
    @InjectModel('Sources') private readonly sourcesModel: Model<Sources>,
  ) { }

  async findAllSources() {
    const e = await this.sourcesModel.find();
    return e;
  }
  
  async findAllExtractionSources() {
    const sources = await this.sourcesModel.find();

    let sourcesToExtract = [];
    if (sources.length > 0) {
      for (let i = 0; i < sources.length; i++) {
        const e = sources[i];
        const stage = e.stage;
        if (stage == 'Extracción') {
          sourcesToExtract.push(e);
        }
      }
    }
    return sourcesToExtract;
  }

  async findAllDocumentationtionSources() {
    const sources = await this.sourcesModel.find();

    let sourcesToDocument = [];
    if (sources.length > 0) {
      for (let i = 0; i < sources.length; i++) {
        const e = sources[i];
        const stage = e.stage;
        if (stage == 'Documentación') {
          sourcesToDocument.push(e);
        }
      }
    }
    return sourcesToDocument;
  }

  async createSource(source: NewSourcesType): Promise<TypeSource> {
    const {
      name,
      ref,
      type,
      subType,
      support,
      bloque,
      theme,
      stage,
      broadcast_date,
      library_name,
      magazine_type_p,
      provice_p,
      recording_date,
      session_p,
      url_location,
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
      name,
      ref,
      type,
      subType,
      support,
      bloque,
      theme,
      stage,
      broadcast_date,
      library_name,
      magazine_type_p,
      provice_p,
      recording_date,
      session_p,
      url_location,

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
      oldSource.ref = newSource.ref;
      oldSource.name = newSource.name;
      oldSource.type = newSource.type;
      oldSource.subType = newSource.subType;
      oldSource.stage = newSource.stage;

      //linguisticas libro o prensa
      oldSource.support = newSource.support;
      oldSource.bloque = newSource.bloque;
      oldSource.theme = newSource.theme;
      oldSource.broadcast_date = newSource.broadcast_date;
      oldSource.library_name = newSource.library_name;
      oldSource.magazine_type_p = newSource.magazine_type_p;
      oldSource.provice_p = newSource.provice_p;
      oldSource.recording_date = newSource.recording_date;
      oldSource.session_p = newSource.session_p;
      oldSource.url_location = newSource.url_location;

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