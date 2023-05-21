import { Module } from '@nestjs/common';
import { ProposalsController } from './proposals.controller';
import { ProposalsService } from './proposals.service';
import { DatabaseModule } from '@app/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposal } from '@app/common/database/entities/proposal.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Proposal])],
  providers: [ProposalsService],
  controllers: [ProposalsController],
})
export class ProposalsModule {
  constructor(private dataSource: DataSource) {}
}
