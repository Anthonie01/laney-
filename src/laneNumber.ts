export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = 0;
    this.secret = false;
  }

  /**
   * checks if secret
   * @returns true or false if it is a secret
   */
  public isSecret(): boolean {
    if (Math.random() > 0.2) {
      return true;
    } else {
      return false;
    }
  }

  public getValue(): number {
    return this.value;
  }
}
