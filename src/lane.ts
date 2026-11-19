import LaneNumber from "./laneNumber.js"

export default class Lane {
    private numbers: LaneNumber[];

    public constructor() {
        this.numbers = [];
    }

    public addNumber(number: LaneNumber): void {
        this.numbers.push(number);
    }

    public getTotal(): number {
        let total = 0;

        for (let i = 0; i < this.numbers.length; i++) {
            total += this.numbers[i].getValue()
        }
        return total;
    }

    public isBusted(): boolean {

    }
}