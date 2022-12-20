import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
const { recipientId, content, category } = body
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    }) 
  }
}
