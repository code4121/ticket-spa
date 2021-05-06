/* eslint-disable @typescript-eslint/naming-convention */
import {
  Driver,
  Service,
  Ticket,
  Tractor,
  Trailer,
  TrailerType,
  TrailerTypeName,
} from "../../entities";
import { Business } from "../../entities/business";
import { ITicketRepository } from "../../usecases";
// import { readFile } from "fs/promises";
// const fs = require("fs").promises;

import sample_breakdowns from "../../assets/sample_breakdowns.json";

import csv from "csv-parser";
import fs from "fs";

export type JSONTicketType = {
  Company: string;
  Status: string;
  "Date Opened": string;
  "Date Complete": string;
  Vin: string;
  Year: string;
  Make: string;
  Mileage: string;
  "Reason Down": string;
  "Repair Notes": string;
  "Driver Name": string;
  "Driver Cell Number": string;
  "Unit Type": string;
  "Unit #": string;
  "Tire Size": string;
};

export interface ILocalCSVDatabase<T extends { id: string }> {
  write(data: T): Promise<void>;
  read(data: T): Promise<T>;
  readAll(startIndex?: number, endIndex?: number): Promise<T[]>;
}

export class LocalTicketRepository implements ITicketRepository {
  private tickets: Ticket[];

  // Note : May pass in a path eventually.
  constructor() {
    this.tickets = [];
  }

  load(): Promise<void> {
    // Extract
    const tickets = sample_breakdowns as JSONTicketType[];
    // console.log("Tickets: ", JSON.stringify(tickets, null, 2));
    tickets.map((b: JSONTicketType, idx: number) => {
      const tractors: Tractor[] = [];
      const trailers: Trailer[] = [];
      if (b["Unit Type"] === "Tractor") {
        tractors.push({
          vin: b.Vin,
          uid: b["Unit #"],
          year: b.Year,
          make: b.Make,
          model: "",
          miles: Number(b.Mileage) || 0,
        } as Tractor);
      } else {
        trailers.push({
          vin: b.Vin,
          uid: b["Unit #"],
          type: TrailerType.dryVan,
          year: b.Year,
          make: b.Make,
          model: "",
          hours: 0,
          tire: {
            size: b["Tire Size"],
          },
        } as Trailer);
      }
      const customer: Business = {
        name: b.Company,
      };
      const service: Service = {
        type: b["Reason Down"],
        description: b["Repair Notes"],
      };
      const driver: Driver = {
        name: b["Driver Name"],
        phone: b["Driver Cell Number"],
      };
      const ticket: Ticket = {
        // id: b["PO Number Issued"],
        id: idx.toString(),
        customer,
        status: b.Status,
        service,
        tractors,
        trailers,
        driver,
        createdOn: new Date(),
        archivedOn: new Date(),
      };
      this.tickets.push(ticket);
      // console.log(`${t.}: ${t.type}`);
    });
    return Promise.resolve();
  }

  async all(): Promise<Ticket[]> {
    return new Promise<Ticket[]>((res, rej) => {
      res(this.tickets);
    });
  }

  findOne(ticket: Partial<Ticket>): Promise<Ticket> {
    throw Error("This method has not been implemented.");
  }

  findAll(ticket: Partial<Ticket>): Promise<Ticket[]> {
    return new Promise<Ticket[]>((res, rej) => {
      res(this.tickets.filter((t) => t === ticket));
    });
  }

  async add(ticket: Ticket): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.tickets.push({ ...ticket, id: new Date().toISOString() });
    });
  }
  update(
    ticket: { id: string } & Partial<Ticket>,
    fieldsToUpdate: Partial<Ticket>
  ): Promise<Ticket> {
    return Promise.resolve({ ...ticket, ...fieldsToUpdate } as Ticket);
  }
  async remove(ticket: Pick<Ticket, "id">): Promise<void> {
    return new Promise<void>((res, rej) => {
      // if (ticket.id === null) {
      //   rej(new Error("Missing ID"));
      // }
      this.tickets = this.tickets.filter((t) => t.id !== ticket.id);
      res();
    });
  }
}
