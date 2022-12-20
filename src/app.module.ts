import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { AppService } from './app.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
