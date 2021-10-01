import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NomenclatorSchema } from './model/nomenclator.model';
import { NomenclatorResolver } from './nomenclator.resolver';
import { NomenclatorService } from './nomensclator.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Nomenclator', schema: NomenclatorSchema },
    ]),
  ],
  providers: [NomenclatorService, NomenclatorResolver],
  exports: [NomenclatorService, NomenclatorResolver],
})
export class NomenclatorModule {}
