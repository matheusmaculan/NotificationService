import { SendNotification } from "./send-notification-use-case"

describe('Sendo Notification',() => {
    test('it should be able to sendo a notification', async () => {
        const sendNotification = new SendNotification();

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        })

        expect(notification).toBeTruthy();
    })
})