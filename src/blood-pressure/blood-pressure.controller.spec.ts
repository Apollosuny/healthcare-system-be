import { Test, TestingModule } from '@nestjs/testing';
import { BloodPressureController } from './blood-pressure.controller';

describe('BloodPressureController', () => {
  let controller: BloodPressureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodPressureController],
    }).compile();

    controller = module.get<BloodPressureController>(BloodPressureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
