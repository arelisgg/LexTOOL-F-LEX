import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { SourcesController } from './sources.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { SourcesSchema } from './schemas/sources.schema';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sources', schema: SourcesSchema }]),
  ],
  providers: [SourcesService],
  controllers: [SourcesController]
})
export class SourcesModule { }

