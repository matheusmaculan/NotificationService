import { Notification } from "src/app/entities/notification/notification";
 
export class PrismaNotificationMapper {  //Mapper faz a conversão dos dados, assim o retorno para o ORM sempre será o mesmo, deixando ainda mais manutenivel
    static toPrisma(notification: Notification) {
    return {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,  
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
    }
    }
} 