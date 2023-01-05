import { NotificationContent } from "./notification-content"

describe('Notification Content', () => {
    // Valida se é possivel criar uma nova notificação
    test('it should be able to create a notification content', () => {
        const notificationContent = new NotificationContent('Você recebeu uma nova notificação')
    
        expect(notificationContent).toBeTruthy()
    })
    
    // Valida se o mínimo está sendo respeitado
    test('it should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new NotificationContent('aaa')).toThrow() // toThrow siginifica que espero que ocorra um erro, assim o teste será finalizado com sucesso
    })
    
    // Valida se o maximo está sendo respeitado
    test('it should not be able to create a notification content with more than 240 characters', () => {
        expect(() => new NotificationContent('a'.repeat(241))).toThrow()
    })
})

