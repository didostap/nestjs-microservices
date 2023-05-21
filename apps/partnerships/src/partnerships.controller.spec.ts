import { Test, TestingModule } from '@nestjs/testing';
import { PartnershipsController } from './partnerships.controller';
import { PartnershipsService } from './partnerships.service';

describe('PartnershipsController', () => {
  let partnershipsController: PartnershipsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PartnershipsController],
      providers: [PartnershipsService],
    }).compile();

    partnershipsController = app.get<PartnershipsController>(PartnershipsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(partnershipsController.getHello()).toBe('Hello World!');
    });
  });
});
