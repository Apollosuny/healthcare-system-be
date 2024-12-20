import { Test, TestingModule } from '@nestjs/testing';
import { BloodSugarService } from './blood-sugar.service';

describe('BloodSugarService', () => {
  let service: BloodSugarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodSugarService],
    }).compile();

    service = module.get<BloodSugarService>(BloodSugarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
