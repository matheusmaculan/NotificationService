export class NotificationContent {
    private readonly content: string;

    get value(): string {
        return this.content
    }

    private validateContentLenght(content: string): boolean {
        return content.length >= 5 && content.length <= 240
    }

    constructor(content: string) {
        const isContentLenghtValid = this .validateContentLenght(content);

        if (!isContentLenghtValid) {
            throw new Error('Content lenght error.');
        }
    }
}