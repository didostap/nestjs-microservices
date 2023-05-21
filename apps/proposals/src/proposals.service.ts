import { Proposal } from '@app/common/database/entities/proposal.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProposalsService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}

  findAll(): Promise<Proposal[]> {
    return this.proposalRepository.find();
  }
}
