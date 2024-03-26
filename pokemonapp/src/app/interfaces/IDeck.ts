import { IData } from "./ICard";

export interface IDeck {
  id?: number;
  cards: IData[];
  name: string;
  userEmail: string;
}
