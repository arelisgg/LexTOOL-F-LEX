import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateEntryDTO } from './dto/entry.dto'
import { EntryService } from "./entry.service";

@Controller('entry')
export class EntryController {

  constructor(private entryService: EntryService) {
  }

  @Post('/create')
  async createPost(@Res() res, @Body() createEntryDTO: CreateEntryDTO) {

    const entry = await this.entryService.createEntry(createEntryDTO)

    return res.status(HttpStatus.OK).json({
      message: 'Entrada Succefully created',
      entry
    });
  }

  @Get('/')
  async getEntries(@Res() res) {
    const entries = await this.entryService.getEntries()
    return res.status(HttpStatus.OK).json({
      entries
    });
  }
  @Get('/:entryID')
  async getEntry(@Res() res, @Param('entryID') entryID) {
    const entrada = await this.entryService.getEntry(entryID);
    if (!entrada) throw new NotFoundException('Esa Entrada no existe')
    return res.status(HttpStatus.OK).json({
      entrada
    });
  }
  @Delete('/delete')
  async deleteEntry(@Res() res, @Query('entryID') entryID) {
    const entryDeleted = await this.entryService.deleteEntry(entryID)
    if (!entryDeleted) throw new NotFoundException('Esa Entrada no existe')
    return res.status(HttpStatus.OK).json({
      entryDeleted
    });
  }

  @Put('/update')
  async updateEntry(@Res() res, @Query('entryID') entryID, @Body() createEntryDTO: CreateEntryDTO) {
    const entryUpdated = await this.entryService.updateEntry(entryID, createEntryDTO);
    if (!entryUpdated) throw new NotFoundException('Esa Entrada no existe')
    return res.status(HttpStatus.OK).json({
      entryUpdated
    });
  }
}
