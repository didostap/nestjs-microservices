import { Injectable } from '@nestjs/common';

@Injectable()
export class PartnershipsService {
  getHello(): string {
    return 'Hello World from partnerships!';
  }
}
