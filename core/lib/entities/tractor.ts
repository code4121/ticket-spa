export class Tractor {
  constructor(
    readonly vin: string,
    readonly uid: string,
    readonly year: string,
    readonly make: string,
    readonly model: string,
    readonly miles: number,
    readonly tire: {
      size: string;
    }
  ) {}
}
