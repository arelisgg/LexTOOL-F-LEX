/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Lemario } from './model/lemario.modelinterface';
import { CreatedLemarioType, EditedLemarioType, LemarioType, NewLemarioType } from './type/lemario.type';

import { NewEntryType } from 'src/entry/type/entry.type';
import { EntryService } from 'src/entry/entry.service';


@Injectable()
export class LemarioService {
    
    constructor(
        @InjectModel('Lemario') private readonly lemarioModel: Model<Lemario>,
        private readonly entryService: EntryService, 
    ) { }

    async getAllLemarios() {
        const e = await this.lemarioModel.find()
        .populate({
            path: 'entries',
            model: 'Entry',
            populate: {
              path: 'source',
              model: 'Sources',
            },
          })
          .exec();
        return e;
    }
    
    async createLemario(createdLemario: NewLemarioType) {
        const lemario = new this.lemarioModel({
            name: createdLemario.name,
            dictionaryType:createdLemario.dictionaryType,
            entries: [],
        });
        await lemario.save();
        return lemario;
    }

    async createEntryByLemarioID(
        newEntry: NewEntryType,
        lemarioID: String,
      ) {
        const l = await this.lemarioModel.findById(lemarioID);
        if (!l) {
          throw new Error('Lemario dont exist');
        } else {
          const eModel = await this.entryService.createEntry(newEntry);
          l.entries.push(eModel.id);
          const updatedLemario = await this.lemarioModel.findOneAndUpdate(
            lemarioID,
            l,
          ).exec();
          console.log(updatedLemario);
          return updatedLemario.populate({
            path: 'entries',
            model: 'Entry',
            populate: {
              path: 'source',
              model: 'Sources',
            },
          });
        }
      }

      async getAllEntriesByID(lemarioID: String){
        const l = await this.lemarioModel
        .findById(lemarioID) .populate({
          path: 'entries',
          model: 'Entry',
          populate: {
            path: 'source',
            model: 'Sources',
          },
        }).exec();
        const entriesIDs = l.entries;
        console.log(entriesIDs);
           if(entriesIDs.length > 0){
          return entriesIDs; 
        }else{
          throw new Error(`Diccionario con id ${lemarioID} no tiene fuentes asociadas`);
        }
      }

    async findByID(lemarioID: String) {
        const lemario = await this.lemarioModel.findById(lemarioID).populate({
          path: 'entries',
          model: 'Entry',
          populate: {
            path: 'source',
            model: 'Sources',
          },
        });
        return lemario;
    }

    async deleteLemario(lemarioID: String) {
        const l = await this.lemarioModel.findById(lemarioID).populate({
            path: 'entries',
            model: 'Entry',
            populate: {
              path: 'source',
              model: 'Sources',
            },
          });
          if (!l) {
            throw new Error('Lemario dont exist');
          }
          l.entries.forEach(async eID => {
            this.entryService.deleteEntry(eID);
          });
          const deletedLemario = await l.deleteOne();
          console.log(deletedLemario);
          return deletedLemario;
    }

    async editLemario (newLemario: EditedLemarioType) {
      let oldLemario = await this.lemarioModel
      .findById(newLemario.id)
      .exec();
  
    if (oldLemario) {
      oldLemario.name = newLemario.name;
      oldLemario.dictionaryType = newLemario.dictionaryType;
     
      oldLemario.save();
      console.log('oldLemarioy:',oldLemario);
  
      return oldLemario;
    } else {
      throw new Error('No existe la Lemario');
    }
  }  
}
