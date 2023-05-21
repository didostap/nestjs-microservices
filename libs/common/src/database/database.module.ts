import { ConfigModule } from '@app/common/config/config.module';
import { Proposal } from '@app/common/database/entities/proposal.entity';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        port: 3306,
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        database: configService.get('DATABASE_NAME'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        entities: [Proposal],
        synchronize: true,
        ssl: {
          rejectUnauthorized: true,
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
