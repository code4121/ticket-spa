export type DataType = { id: string };

export interface IDataStorageService<T extends DataType> {
  save(data: T): Promise<void>;
  archive(id: string): Promise<void>;
}
