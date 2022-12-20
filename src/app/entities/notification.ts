import { NotificationContent } from "./notification-content";

export interface NotificationData{
    content: NotificationContent;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
    recipientId: string;
}

export class Notification {
    private data: NotificationData;


    constructor(data: NotificationData) {
        this.data = data
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

    public get readAt(): Date | null | undefined{
        return this.data.readAt
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