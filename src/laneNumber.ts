export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = Math.floor(Math.random()*10) + 1;
    this.secret = Math.random() > 0.9;
  }

  /**
   * checks if secret
   * @returns true or false if it is a secret
   */
  public isSecret(): boolean {
    return this.secret;
  }

  public getValue(): number {
    return this.value;
  }
}
