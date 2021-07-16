import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { SourcesResolver } from './sources.resolver';

import { MongooseModule } from '@nestjs/mongoose';
import { SourcesSchema } from './model/sources.model';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sources', schema: SourcesSchema }]),
  ],
  providers: [SourcesService, SourcesResolver],
  exports: [SourcesService, SourcesResolver],
})
export class SourcesModule { }

