import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OcurrenceRecordSchema } from './model/ocurrenceRecord.model';
import { OcurrenceRecordResolver } from './ocurrenceRecord.resolver';
import { OcurrenceRecordService } from './ocurrenceRecord.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'OcurrenceRecord', schema: OcurrenceRecordSchema },
    ]),
  ],
  providers: [OcurrenceRecordService, OcurrenceRecordResolver],
  exports: [OcurrenceRecordService, OcurrenceRecordResolver],
})
export class OcurrenceRecordModule {}
