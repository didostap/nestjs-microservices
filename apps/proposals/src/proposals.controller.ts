import { Controller, Get } from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { Proposal } from '@app/common/database/entities/proposal.entity';

@Controller()
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Get()
  getProposals(): Promise<Proposal[]> {
    return this.proposalsService.findAll();
  }
}
