import { Test, TestingModule } from '@nestjs/testing';
import { EggsDozenController } from './eggs-dozen.controller';

describe('EggsDozenController', () => {
  let controller: EggsDozenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EggsDozenController],
    }).compile();

    controller = module.get<EggsDozenController>(EggsDozenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
