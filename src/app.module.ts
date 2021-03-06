import { Module } from '@nestjs/common';
import { EntryModule } from './entry/entry.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LemarioModule } from './lemario/lemario.module';
import { SourcesModule } from './sources/sources.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MinioModule } from './minio/minio.module';
import { MulterModule } from '@nestjs/platform-express';
import { NomenclatorModule } from './nomenclators/nomenclator.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Lextool-F-Lex', {
      useFindAndModify: false,
    }),
    MulterModule.register({
      dest: './files',
    }),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    LemarioModule,
    NomenclatorModule,
    DictionaryModule,
    MinioModule,
  ],
})
export class AppModule {}

