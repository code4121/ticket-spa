export class Service {
  constructor(readonly type: ServiceType, readonly description: string) {}
}

export enum ServiceType {
  breakdown = "breakdown",
  maintenance = "maintenance",
}

export enum ServiceTypeNames {
  breakdown = "Breakdown",
  maintenance = "Maintenance",
}
