export interface ICard {
  count: number;
  data: Data[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface Data {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

export interface Legalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface Images {
  symbol: string;
  logo: string;
}

export interface Legalities2 {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface Images2 {
  small: string;
  large: string;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices {
  normal: Normal;
  reverseHolofoil: ReverseHolofoil;
}

export interface Normal {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface ReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices2;
}

export interface Prices2 {
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

