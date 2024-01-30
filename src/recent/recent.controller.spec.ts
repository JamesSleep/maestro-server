import { Test, TestingModule } from '@nestjs/testing';
import { RecentController } from './recent.controller';

describe('RecentController', () => {
  let controller: RecentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecentController],
    }).compile();

    controller = module.get<RecentController>(RecentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
