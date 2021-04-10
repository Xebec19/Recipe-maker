export class Ingredient {
  public name: string;
  public amount: number;
  constructor(public _name: string, public _amount: number) {
    this.name = _name;
    this.amount = _amount;
  }
}