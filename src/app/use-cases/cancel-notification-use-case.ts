import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification/notification";
import { NotificationContent } from "../entities/notification/notification-content";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found-error";

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
    constructor(
        private notificationRepository: NotificationsRepository) {} // Quando for instanciar uma nova notificação irei receber o repositorio

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request

        const notification = await this.notificationRepository.findById(notificationId)

        if (!notification){
            throw new NotificationNotFound //Chamei o mapeamendo de erros criados
        }

        notification.cancel();

        await this.notificationRepository.save(notification)

    }
}