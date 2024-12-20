import { Test, TestingModule } from '@nestjs/testing';
import { BloodSugarController } from './blood-sugar.controller';

describe('BloodSugarController', () => {
  let controller: BloodSugarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodSugarController],
    }).compile();

    controller = module.get<BloodSugarController>(BloodSugarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
