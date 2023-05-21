import { Module } from '@nestjs/common';
import { PartnershipsController } from './partnerships.controller';
import { PartnershipsService } from './partnerships.service';

@Module({
  imports: [],
  controllers: [PartnershipsController],
  providers: [PartnershipsService],
})
export class PartnershipsModule {}
