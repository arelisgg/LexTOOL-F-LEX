import { Module } from '@nestjs/common';
import { LemarioResolver } from './lemario.resolver';
import { LemarioService } from './lemario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LemarioSchema } from './model/lemario.model';
import { EntryModule } from 'src/entry/entry.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lemario', schema: LemarioSchema }]),
    EntryModule,
  ],
    providers: [LemarioService,LemarioResolver],
    exports: [LemarioService,LemarioResolver]
})
export class LemarioModule { }
