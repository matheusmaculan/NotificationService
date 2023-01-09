import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../app/entities/notification/notification";
import { NotificationsRepository } from "../../../../app/repositories/notification-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(
        private prismaService: PrismaService
    ) {}
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.prismaService.notification.create({
            data: raw
        })
    }
}