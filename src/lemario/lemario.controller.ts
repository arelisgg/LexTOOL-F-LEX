import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateLemarioDTO } from './dto/lemario.dto'
import { LemarioService } from "./lemario.service";


@Controller('lemario')
export class LemarioController {
    constructor(private lemarioService: LemarioService) {
    }

    @Post('/create')
    async createPost(@Res() res, @Body() createLemarioDTO: CreateLemarioDTO) {

        const lemario = await this.lemarioService.createLemario(createLemarioDTO)

        return res.status(HttpStatus.OK).json({
            message: 'Lemario Succefully created',
            lemario
        });
    }

    @Get('/')
    async getLemarios(@Res() res) {
        const lemarios = await this.lemarioService.getLemarios()
        return res.status(HttpStatus.OK).json({
            lemarios
        });
    }
    @Get('/:lemarioID')
    async getLemario(@Res() res, @Param('lemarioID') lemarioID) {
        const lemario = await this.lemarioService.getLemario(lemarioID);
        if (!lemario) throw new NotFoundException('Ese Lemario no existe')
        return res.status(HttpStatus.OK).json({
            lemario
        });
    }
    @Delete('/delete')
    async deleteLemario(@Res() res, @Query('lemarioID') lemarioID) {
        const lemarioDeleted = await this.lemarioService.deleteLemario(lemarioID)
        if (!lemarioDeleted) throw new NotFoundException('Ese Lemario no existe')
        return res.status(HttpStatus.OK).json({
            lemarioDeleted
        });
    }

    @Put('/update')
    async updateLemario(@Res() res, @Query('lemarioID') lemarioID, @Body() createLemarioDTO: CreateLemarioDTO) {
        const lemarioUpdated = await this.lemarioService.updateLemario(lemarioID, createLemarioDTO);
        if (!lemarioUpdated) throw new NotFoundException('Ese Lemario no existe')
        return res.status(HttpStatus.OK).json({
            lemarioUpdated
        });
    }
}
