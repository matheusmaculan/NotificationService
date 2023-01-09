export class NotificationNotFound extends Error { //Mapeamento de possíveis erros
    constructor() {
        super('Notification Not Found.')
    }
}