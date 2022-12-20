import { Notification } from "./notification";
import { NotificationContent } from "./notification-content"

describe('Notification', () => {
    test('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new NotificationContent('Você recebeu uma nova notificação'),
            category: 'social',
            recipientId: 'example-recipient-id',
        });
    
        expect(notification).toBeTruthy()
    })
})

