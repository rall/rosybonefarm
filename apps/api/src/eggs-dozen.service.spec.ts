import { Test, TestingModule } from '@nestjs/testing';
import { EggsDozenService } from './eggs-dozen.service';

describe('EggsDozenService', () => {
  let service: EggsDozenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EggsDozenService],
    }).compile();

    service = module.get<EggsDozenService>(EggsDozenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
