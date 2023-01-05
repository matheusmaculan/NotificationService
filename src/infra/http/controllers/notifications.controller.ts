import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from 'src/app/use-cases/send-notification-use-case';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
const { recipientId, content, category } = body;

   const { notification } = await this.sendNotification.execute({
    recipientId,
    content,
    category,
   });


   return { notification: NotificationViewModel.toHTTP(notification) }
  }
}
 