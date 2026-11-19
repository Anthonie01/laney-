import LaneNumber from "./laneNumber.js";

export default class Lane {
  private numbers: LaneNumber[];

  public constructor() {
    this.numbers = [];
  }

  /**
   * adds the lane number to a lane arrays
   * @param number the lane number
   */
  public addNumber(number: LaneNumber): void {
    this.numbers.push(number);
  }

  /**
   * makes a total and returns it
   * @returns total
   */
  public getTotal(): number {
    let total: number = 0;

    for (let i: number = 0; i < this.numbers.length; i++) {
      total += this.numbers[i].getValue();
    }
    return total;
  }

  /**
   * checks wether lane is busted
   * @returns true if lane is busted
   */
  public isBusted(): boolean {
    const total: number = this.getTotal();
    if(total > 70) {
      return true;
    }
    return false;
  }
}
