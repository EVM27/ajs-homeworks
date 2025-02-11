
export default class Movie {
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public year: number,
        public price: number
    ) {}

    displayInfo(): string {
        return `${this.title} (${this.year}), режиссер: ${this.director}, цена: ${this.price} руб.`;
    }
}