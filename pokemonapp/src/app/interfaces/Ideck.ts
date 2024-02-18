import { Data } from "./Icard";

export interface Ideck {
  id: number;
  cards: Data[];
  name: string;
  userEmail: string;
}
