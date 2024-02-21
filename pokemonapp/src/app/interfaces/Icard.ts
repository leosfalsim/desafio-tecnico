export interface ICard {
  count: number;
  data: IData[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface IData {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: number;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: IAbility[];
  attacks: IAttack[];
  weaknesses: IWeakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: ISet;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: ILegalities2;
  images: IImages2;
  tcgplayer: ITcgplayer;
  cardmarket: ICardmarket;
  isCardSelected?: boolean;
}

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IAttack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegalities
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: IImages;
}

export interface ILegalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface IImages {
  symbol: string;
  logo: string;
}

export interface ILegalities2 {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface IImages2 {
  small: string;
  large: string;
}

export interface ITcgplayer {
  url: string;
  updatedAt: string;
  prices: IPrices;
}

export interface IPrices {
  normal: INormal;
  reverseHolofoil: IReverseHolofoil;
}

export interface INormal {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface IReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface ICardmarket {
  url: string;
  updatedAt: string;
  prices: IPrices2;
}

export interface IPrices2 {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow?: any;
  suggestedPrice?: any;
  reverseHoloSell?: any;
  reverseHoloLow?: any;
  reverseHoloTrend?: any;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1?: any;
  reverseHoloAvg7?: any;
  reverseHoloAvg30?: any;
}

