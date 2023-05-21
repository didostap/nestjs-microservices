import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: joi.object({
        DATABASE_HOST: joi.string().required(),
        DATABASE_NAME: joi.string().required(),
        DATABASE_USER: joi.string().required(),
        DATABASE_PASSWORD: joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
