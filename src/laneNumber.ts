export default class LaneNumber {
    private value: number;

    private secret: boolean;

    public constructor(value: number) {
        this.value = value;
        this.secret = false;
    }

    public isSecret(): boolean {
        if(Math.random() > 0.2) {
            return true;
        } else {
            return false;
        }
    }

    public getValue() : number {
        return this.value;
    }
    
}