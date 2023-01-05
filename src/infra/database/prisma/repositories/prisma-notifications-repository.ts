import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../app/entities/notification/notification";
import { NotificationsRepository } from "../../../../app/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(
        private prismaService: PrismaService
    ) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                content: notification.content.value,
                category: notification.category,  
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
            }
        })
    }
}