import { Ticket } from "../../entities/ticket";
import { IDataStorageService } from "../../services/storage-service/storage-service";
export interface ITicketRepository {
  all(): Promise<Ticket[]>;
  findOne(ticket: Partial<Ticket>): Promise<Ticket>;
  findAll(ticket: Partial<Ticket>): Promise<Ticket[]>;
  add(ticket: Ticket): void;
  // patch( {id: string} & Partial<Ticket>)): Promise<Ticket>;
  update(
    ticket: { id: string } & Partial<Ticket>,
    fieldsToUpdate: Partial<Ticket>
  ): Promise<Ticket>;
  remove(ticket: Pick<Ticket, "id">): void;
}


