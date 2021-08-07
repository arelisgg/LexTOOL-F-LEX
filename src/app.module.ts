import { Module } from '@nestjs/common';
import { EntryModule } from './entry/entry.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LemarioModule } from './lemario/lemario.module';
import { SourcesModule } from './sources/sources.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Dictionary', {
      useFindAndModify: false,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    LemarioModule,
  ],
})
export class AppModule {}

