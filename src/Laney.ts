import Lane from "./lane.js";
import LaneNumber from "./laneNumber.js";

export default class Laney {
  private busted: boolean;

  private lanes: Lane[];

  private nextNumbers: LaneNumber[];

  public constructor(numberOfLanes: number = 3) {
    this.busted = false;
    this.lanes = [];
    this.nextNumbers = [];

    for (let i: number = 0; i < numberOfLanes; i++) {
      this.lanes[i] = new Lane();
    }
    for(let i: number = 0; i < 3; i++) {
      this.nextNumbers[i] = new LaneNumber();
    }
  }

  /**
   * Places the next pending number into the specified lane and then enqueues a new next number.
   * Does nothing if the game is already busted.
   * @param laneIndex index of the lane to receive the number.
   * @returns void
   */
  public placeNumberInLane(laneIndex: number): void {
    this.lanes[laneIndex].addNumber(this.nextNumbers.shift()!);
    this.nextNumbers.push(new LaneNumber());
  }

  /**
   * Returns a message about the current game state.
   * If busted, indicates that the game is over. Otherwise, lists the next numbers.
   * @returns string
   */
  public getMessage(): string {
    const numbers: string[] = [];
    this.isBusted();
    if(this.busted == true) {
      return "You busted! Start a new game?";
    } else {
      for (let i: number = 0; i < 3; i++) {
        if(this.nextNumbers[i].isSecret() == true) {
          numbers[i] = "?";
        } else {
          numbers[i] = this.nextNumbers[i].getValue().toString();
        }
      }
      return `Next numbers are: ${numbers[0]}, ${numbers[1]}, ${numbers[2]}`;
    }
  }

  /**
   * Returns the total score for the specified lane.
   * @param laneIndex index of the lane to get the total for.
   * @returns number
   */
  public getLaneTotal(laneIndex: number): number {
    return this.lanes[laneIndex].getTotal();
  }

  /**
   * Returns the total score across all lanes.
   * @returns number
   */
  public getTotal(): number {
    let total: number = 0;
    for (let i: number = 0; i < this.lanes.length; i++) {
      total += this.lanes[i].getTotal();
    }
    return total;
  }

  /**
   * Returns whether the game is busted.
   * @returns boolean
   */
  public isBusted(): boolean {
    for (let i: number = 0; i < this.lanes.length; i++) {
      if(this.lanes[i].isBusted() == true) {
        this.busted = true;
        return this.busted;
      }
    }
    this.busted = false;
    return this.busted;
  }
}
