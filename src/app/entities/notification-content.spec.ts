import { NotificationContent } from "./notification-content"

test('it should be able to create a notification content', () => {
    const notificationContent = new NotificationContent('Você recebeu uma nova notificação')

    expect(notificationContent).toBeTruthy()
})