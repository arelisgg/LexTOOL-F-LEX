import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Nomenclator } from './model/nomenclator.modelinterface';
import { NewNomenclatorType, NomenclatorType } from './type/nomenclator.type';
import { NomenclatorService } from './nomensclator.service';
import { NewThemeType, ThemeType } from './type/theme.type';
import { DictionaryTypeType, NewDictionaryTypeType } from './type/dictionaryType.type';
import { NewSession_pType, Session_pType } from './type/session_p.type';
import { NewTypologyType, TypologyType } from './type/typology.type';
import { GenreType, NewGenreType } from './type/genre.type';

@Resolver()
export class NomenclatorResolver {
  constructor(private readonly NomenclatorService: NomenclatorService) { }

  @Query(() => [ThemeType])
  async getAllThemes() {
    return await this.NomenclatorService.findAllThemes();
  }
  @Query(() => [DictionaryTypeType])
  async getAllDictionaryTypes() {
    return await this.NomenclatorService.findAllDictionaryTypes();
  }
  @Query(() => [Session_pType])
  async getAllSessionsP() {
    return await this.NomenclatorService.findAllSessionsP();
  }
  @Query(() => [TypologyType])
  async getAllTypologies() {
    return await this.NomenclatorService.findAllTypologies();
  }
  @Query(() => [GenreType])
  async getAllGenres() {
    return await this.NomenclatorService.findAllGenres();
  }

  @Mutation(() => NomenclatorType)
  async createNomenclator(@Args('newNomenclator') newNomenclator: NewNomenclatorType) {
    return await this.NomenclatorService.createNomenclator(newNomenclator);
  }
  @Mutation(() => NomenclatorType)
  async addTheme(@Args('newTheme') newTheme: NewThemeType) {
    return await this.NomenclatorService.addTheme(newTheme);
  }
  @Mutation(() => NomenclatorType)
  async addGenres(@Args('newGenre') newGenre: NewGenreType) {
    return await this.NomenclatorService.addGenres(newGenre);
  }
  @Mutation(() => NomenclatorType)
  async addTypology(@Args('newTypology') newTypology: NewTypologyType) {
    return await this.NomenclatorService.addTypology(newTypology);
  }
  @Mutation(() => NomenclatorType)
  async addSessionP(@Args('newSessionP') newSessionP: NewSession_pType) {
    return await this.NomenclatorService.addSessionP(newSessionP);
  }
  @Mutation(() => NomenclatorType)
  async addDictionaryType(@Args('newDictionaryType') newDictionaryType: NewDictionaryTypeType) {
    return await this.NomenclatorService.addDictionaryType(newDictionaryType);
  }

  @Mutation(() => NomenclatorType)
  async deleteTheme(@Args('nombre') nombre: String) {
    return await this.NomenclatorService.deleteTheme(nombre);
  }
  @Mutation(() => NomenclatorType)
  async deleteGenre(@Args('nombre') nombre: String) {
    return await this.NomenclatorService.deleteGenre(nombre);
  }
  @Mutation(() => NomenclatorType)
  async deleteSessionP(@Args('nombre') nombre: String) {
    return await this.NomenclatorService.deleteSessionP(nombre);
  }
  @Mutation(() => NomenclatorType)
  async deleteTypology(@Args('nombre') nombre: String) {
    return await this.NomenclatorService.deleteTypology(nombre);
  }
  @Mutation(() => NomenclatorType)
  async deleteDictionaryType(@Args('nombre') nombre: String) {
    return await this.NomenclatorService.deleteDictionaryType(nombre);
  }
}