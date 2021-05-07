import { Business } from "./business";
import { Driver } from "./driver";
import { Service } from "./service";
import { Tractor } from "./tractor";
import { Trailer } from "./trailer";

export enum StatusType {
  "open" = "open",
  "closed" = "closed",
  "complete" = "complete",
}

export const STATUS_TYPE_NAMES = {
  [StatusType.open]: "Open",
  [StatusType.closed]: "Closed",
  [StatusType.complete]: "Complete",
};

export enum StatusTypeNames {
  "open" = "Open",
  "closed" = "Closed",
  "complete" = "Complete",
}

export class Ticket {
  constructor(
    readonly id: string,
    readonly customer: Business,
    readonly status: StatusType,
    readonly service: Service,
    readonly tractors: Tractor[],
    readonly trailers: Trailer[],
    readonly driver: Driver,
    readonly createdOn: Date,
    readonly archivedOn: Date
  ) {}
}
