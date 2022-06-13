import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OcurrenceRecord } from './model/ocurrenceRecord.modelinterface';
import { CreatedOcurrenceRecordType, EditedOcurrenceRecordType, NewOcurrenceRecordType, OcurrenceRecordType } from './type/ocurrenceRecord.type';
import { OcurrenceRecordService } from './ocurrenceRecord.service';

@Resolver()
export class OcurrenceRecordResolver {
  constructor(private readonly OcurrenceRecordService: OcurrenceRecordService) { }

  @Query(() => [OcurrenceRecordType])
  async getAllOcurrenceRecords() {
    return await this.OcurrenceRecordService.findAll();
  }

  @Query(() => OcurrenceRecordType)
  async getOcurrenceRecordByID(@Args('orID') orID: String) {
    return await this.OcurrenceRecordService.findByID(orID);
  }
  @Mutation(() => CreatedOcurrenceRecordType)
  async createOcurrenceRecord(
    @Args('newOcurrenceRecord') newOcurrenceRecord: NewOcurrenceRecordType
  ) {
    return await this.OcurrenceRecordService.createOcurrenceRecord(newOcurrenceRecord);
  }
  @Mutation(() => OcurrenceRecordType)
  async deleteOcurrenceRecordByID(@Args('orID') orID: String) {
    console.log(orID);
    return this.OcurrenceRecordService.deleteOcurrenceRecordByID(orID);
  }

  @Mutation(() => OcurrenceRecordType)
  async editOcurrenceRecord(
    @Args('newOcurrenceRecord') newOcurrenceRecord: NewOcurrenceRecordType) {
    console.log(newOcurrenceRecord);
    return this.OcurrenceRecordService.editOcurrenceRecord(newOcurrenceRecord);
  }

  @Mutation(() => OcurrenceRecordType)
  async editORAppearances(
    @Args('newOcurrenceRecord') newOcurrenceRecord: EditedOcurrenceRecordType) {
    console.log(newOcurrenceRecord);
    return this.OcurrenceRecordService.editORAppearances(newOcurrenceRecord);
  }
}
