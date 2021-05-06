import { Business } from "./business";
import { Driver } from "./driver";
import { Service } from "./service";
import { Tractor } from "./tractor";
import { Trailer } from "./trailer";

export class Ticket {
  constructor(
    readonly id: string,
    readonly customer: Business,
    readonly status: string,
    readonly service: Service,
    readonly tractors: Tractor[],
    readonly trailers: Trailer[],
    readonly driver: Driver,
    readonly createdOn: Date,
    readonly archivedOn: Date
  ) {}
}
