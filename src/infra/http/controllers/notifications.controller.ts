import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
const { recipientId, content, category } = body;
  }
}
