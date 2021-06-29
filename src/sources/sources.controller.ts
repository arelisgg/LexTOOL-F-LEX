import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateSourcesDTO } from './dto/sources.dto'
import { SourcesService } from "./sources.service";


@Controller('sources')
export class SourcesController {
    constructor(private sourceService: SourcesService) {
    }

    @Post('/create')
    async createPost(@Res() res, @Body() createSourcesDTO: CreateSourcesDTO) {

        const source = await this.sourceService.createSource(createSourcesDTO)

        return res.status(HttpStatus.OK).json({
            message: 'Fuente Succefully created',
            source
        });
    }

    @Get('/')
    async getSources(@Res() res) {
        const sources = await this.sourceService.getSources()
        return res.status(HttpStatus.OK).json({
            sources
        });
    }
    @Get('/:sourceID')
    async getSource(@Res() res, @Param('sourceID') sourceID) {
        const source = await this.sourceService.getSource(sourceID);
        if (!source) throw new NotFoundException('Esa Fuente no existe')
        return res.status(HttpStatus.OK).json({
            source
        });
    }
    @Delete('/delete')
    async deleteSource(@Res() res, @Query('sourceID') sourceID) {
        const sourceDeleted = await this.sourceService.deleteSource(sourceID)
        if (!sourceDeleted) throw new NotFoundException('Esa Fuente no existe')
        return res.status(HttpStatus.OK).json({
            sourceDeleted
        });
    }

    @Put('/update')
    async updateSource(@Res() res, @Query('sourceID') sourceID, @Body() createSourcesDTO: CreateSourcesDTO) {
        const sourceUpdated = await this.sourceService.updateSource(sourceID, createSourcesDTO);
        if (!sourceUpdated) throw new NotFoundException('Esa Fuente no existe')
        return res.status(HttpStatus.OK).json({
            sourceUpdated
        });
    }
}
