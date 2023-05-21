import { NestFactory } from '@nestjs/core';
import { ProposalsModule } from './proposals.module';

async function bootstrap() {
  const app = await NestFactory.create(ProposalsModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
