import { Test, TestingModule } from '@nestjs/testing';
import { LemarioController } from './lemario.controller';

describe('LemarioController', () => {
  let controller: LemarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LemarioController],
    }).compile();

    controller = module.get<LemarioController>(LemarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
