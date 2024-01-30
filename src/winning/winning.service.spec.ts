import { Test, TestingModule } from '@nestjs/testing';
import { WinningService } from './winning.service';

describe('WinningService', () => {
  let service: WinningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinningService],
    }).compile();

    service = module.get<WinningService>(WinningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
