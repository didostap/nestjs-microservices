import { Test, TestingModule } from '@nestjs/testing';
import { ProposalsController } from './proposals.controller';
import { ProposalsService } from './proposals.service';

describe('ProposalsController', () => {
  let proposalsController: ProposalsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProposalsController],
      providers: [ProposalsService],
    }).compile();

    proposalsController = app.get<ProposalsController>(ProposalsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(proposalsController.getHello()).toBe('Hello World!');
    });
  });
});
