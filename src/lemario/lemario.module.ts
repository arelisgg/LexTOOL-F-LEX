import { Module } from '@nestjs/common';
import { LemarioController } from './lemario.controller';
import { LemarioService } from './lemario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LemarioSchema } from './schemas/lemario.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lemario', schema: LemarioSchema }]),
  ],
  controllers: [LemarioController],
  providers: [LemarioService]
})
export class LemarioModule { }
