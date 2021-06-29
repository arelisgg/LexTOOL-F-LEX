import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LemarioModule } from './lemario/lemario.module';
import { SourcesModule } from './sources/sources.module';

@Module({
  imports: [EntryModule, MongooseModule.forRoot('mongodb://localhost/miBD'), LemarioModule, SourcesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
