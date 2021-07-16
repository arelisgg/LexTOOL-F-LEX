import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionarySchema } from './model/dictionary.model';
import { DictionaryService } from './dictionary.service';
import { DictionaryResolver } from './dictionary.resolver';
import { SourcesModule } from 'src/Sources/sources.module';
import { LemarioModule } from 'src/lemario/lemario.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dictionary', schema: DictionarySchema }]),
    SourcesModule,
    LemarioModule,
  ],
  providers: [DictionaryService, DictionaryResolver],
  exports: [DictionaryService, DictionaryResolver],
})
export class DictionaryModule {}
