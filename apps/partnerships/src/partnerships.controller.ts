import { Controller, Get } from '@nestjs/common';
import { PartnershipsService } from './partnerships.service';

@Controller()
export class PartnershipsController {
  constructor(private readonly partnershipsService: PartnershipsService) {}

  @Get()
  getHello(): string {
    return this.partnershipsService.getHello();
  }
}
