export enum TrailerTypeName {
  dryVan = "Dry Van",
  flatBed = "Flat Bed",
  refrigerated = "Refrigerated",
}

export enum TrailerType {
  dryVan = "dryVan",
  flatBed = "flatBed",
  refrigerated = "refrigerated",
}

export class Trailer {
  constructor(
    readonly type: TrailerType,
    readonly vin: string,
    readonly uid: string,
    readonly year: string,
    readonly make: string,
    readonly model: string,
    readonly hours: number,
    readonly tire: {
      size: string;
    }
  ) {}
}
