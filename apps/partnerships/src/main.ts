import { NestFactory } from '@nestjs/core';
import { PartnershipsModule } from './partnerships.module';

async function bootstrap() {
  const app = await NestFactory.create(PartnershipsModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
