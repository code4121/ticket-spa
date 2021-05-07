export enum TrailerType {
  dryVan = "dryVan",
  flatBed = "flatBed",
  refrigerated = "refrigerated",
}

export const TRAILER_TYPE_NAMES = {
  [TrailerType.dryVan]: "Dry Van",
  [TrailerType.flatBed]: "Flat Bed",
  [TrailerType.refrigerated]: "Refrigerated",
};

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
