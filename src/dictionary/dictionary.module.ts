import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionarySchema } from './model/dictionary.model';
import { DictionaryService } from './dictionary.service';
import { DictionaryResolver } from './dictionary.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dictionary', schema: DictionarySchema }]),
  ],
  providers: [DictionaryService, DictionaryResolver],
  exports: [DictionaryService, DictionaryResolver],
})
export class DictionaryModule {}
