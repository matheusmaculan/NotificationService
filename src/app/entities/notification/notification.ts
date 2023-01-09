import { Replace } from "src/helpers/replace";
import { NotificationContent } from "./notification-content";
import { randomUUID } from 'node:crypto'

export interface NotificationData{
    content: NotificationContent;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
    canceledAt?: Date;
    recipientId: string;
}

export class Notification {
    private _id: string; 
    private data: NotificationData;


    constructor(data: Replace<NotificationData, { createdAt?: Date }>) { // Usei a função replace para deixar a propriedade createdAt opcional, caso n seja passada ele irar gerar com o Date()
        this._id = randomUUID();
        this.data = {
            ...data,
            createdAt: data.createdAt ?? new Date()
        }
    }

    public get id(){
        return this._id
    }

    public set content(content: NotificationContent) {
        this.data.content = content
    }

    public get content(): NotificationContent {
        return this.data.content
    }

    public set category(category: string) {
        this.data.category = category
    }  

    public get category(): string {
        return this.data.category
    }

    public set readAt(readAt: Date | null | undefined) {
        this.data.readAt = readAt
    }

    public get readAt(): Date | null | undefined {
        return this.data.readAt
    }

    public get canceledAt(): Date | null | undefined {
        return this.data.canceledAt
    }

    public cancel() { //não foi criado um setter pq ao cancelar irá pegar a data atual, não precisa passar por parametro
        this.data.canceledAt = new Date();
    }

    public get createdAt(): Date {
        return this.data.createdAt
    }

    public set recipientId(recipientId: string) {
        this.data.recipientId = recipientId
    }

    public get recipientId(): string {
        return this.data.recipientId
    }

    
}