import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrySchema } from './schemas/entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entry', schema: EntrySchema }]),
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule { }
