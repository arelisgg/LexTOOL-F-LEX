import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OcurrenceRecord } from './model/ocurrenceRecord.modelinterface';
import { CreatedOcurrenceRecordType, NewOcurrenceRecordType, OcurrenceRecordType } from './type/ocurrenceRecord.type';
import { OcurrenceRecordService } from './ocurrenceRecord.service';

@Resolver()
export class OcurrenceRecordResolver {
  constructor(private readonly OcurrenceRecordService: OcurrenceRecordService) {}

  @Query(() => [OcurrenceRecordType])
  async getAllOcurrenceRecords() {
    return await this.OcurrenceRecordService.findAll();
  }

  @Query(() => OcurrenceRecordType)
  async getOcurrenceRecordByID(@Args('orID') orID: String) {
    return await this.OcurrenceRecordService.findByID(orID);
  }
}