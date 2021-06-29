import { Test, TestingModule } from '@nestjs/testing';
import { LemarioService } from './lemario.service';

describe('LemarioService', () => {
  let service: LemarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LemarioService],
    }).compile();

    service = module.get<LemarioService>(LemarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
