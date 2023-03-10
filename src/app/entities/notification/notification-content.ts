export class NotificationContent {
    static create(arg0: string): NotificationContent {
        throw new Error("Method not implemented.");
    }
    private readonly content: string;

    get value(): string {
        return this.content
    }

    private validateNotificationContentLenght(content: string): boolean {
        return content.length >= 5 && content.length <= 240
    }

    constructor(content: string) {
        const isContentLenghtValid = this.validateNotificationContentLenght(content);

        if (!isContentLenghtValid) {
            throw new Error('Content length error.');
        }

        this.content = content
    }
}