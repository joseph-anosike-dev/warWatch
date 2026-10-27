/**
 * Prices across Westeros, late 299 AC. Canon-plausible figures gathered
 * "by the Citadel": brown bread at a silver stag (Hot Pie, eyewitness),
 * one golden dragon to 210 silver stags (book canon exchange rate).
 */

export interface Quote {
  place: string;
  price: number;
  note?: string;
}

export interface Commodity {
  id: string;
  name: string;
  /** currency/unit the price is quoted in */
  unit: string;
  /** oldest → newest, twelve fortnights of the war */
  history: number[];
  note: string;
  quotes: Quote[];
}

export const MARKETS: Commodity[] = [
  {
    id: "bread",
    name: "Brown Bread, the loaf",
    unit: "silver stags",
    history: [0.4, 0.4, 0.42, 0.45, 0.45, 0.5, 0.55, 0.6, 0.65, 0.75, 0.9, 1.0],
    note: "A silver stag a loaf, when there is bread. Confirmed by an independent baker of the Crossroads.",
    quotes: [
      { place: "King's Landing", price: 1.0, note: "Tyrell wagons, when they arrive" },
      { place: "The Twins", price: 1.3, note: "the Freys add a toll at the crossing" },
      { place: "Riverrun", price: 1.1, note: "besieged; cash only" },
      { place: "White Harbor", price: 0.8, note: "ships still come and go" },
    ],
  },
  {
    id: "brown",
    name: "Bowl o' Brown",
    unit: "copper pennies",
    history: [2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5],
    note: "Meat content now rumoured rather than confirmed. Flea Bottom rates it a bargain regardless.",
    quotes: [
      { place: "Flea Bottom", price: 5, note: "mostly brown, per the purveyor" },
      { place: "The Red Keep", price: 8, note: "same bowl, better view" },
    ],
  },
  {
    id: "wheat",
    name: "Wheat, the bushel",
    unit: "silver stags",
    history: [1.1, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4],
    note: "The riverlands were the granary of the crownlands. The harvest is burning faster than it is threshed.",
    quotes: [
      { place: "The Reach", price: 1.2, note: "granary of the realm" },
      { place: "King's Landing", price: 2.4 },
      { place: "The riverlands", price: 3.0, note: "foragers set the price, usually by fire" },
    ],
  },
  {
    id: "pork",
    name: "Salt Pork, the side",
    unit: "silver stags",
    history: [0.7, 0.75, 0.8, 0.8, 0.9, 0.9, 1.0, 1.0, 1.1, 1.2, 1.3, 1.4],
    note: "Every army between the Neck and the Blackwater is eating it this season.",
    quotes: [
      { place: "King's Landing", price: 1.4 },
      { place: "White Harbor", price: 1.1 },
      { place: "Moat Cailin", price: 2.0, note: "ironborn rates; bring your own salt" },
    ],
  },
  {
    id: "ale",
    name: "Ale, the keg",
    unit: "silver stags",
    history: [0.3, 0.3, 0.32, 0.35, 0.35, 0.38, 0.4, 0.42, 0.45, 0.48, 0.5, 0.55],
    note: "The one comfort whose price rises slowly. Ale pays for grief by instalments.",
    quotes: [
      { place: "King's Landing", price: 0.55 },
      { place: "The Inn at the Crossroads", price: 0.7, note: "Hot Pie does the baking, not the pouring" },
    ],
  },
  {
    id: "redwine",
    name: "Dornish Red, the cask",
    unit: "golden dragons",
    history: [1.4, 1.4, 1.45, 1.5, 1.5, 1.5, 1.55, 1.55, 1.6, 1.6, 1.6, 1.65],
    note: "Steady. Dorne grows its own grapes and minds its own war.",
    quotes: [
      { place: "King's Landing", price: 1.65 },
      { place: "Sunspear", price: 1.2, note: "at the vineyard gate" },
      { place: "Oldtown", price: 1.5 },
    ],
  },
  {
    id: "horse",
    name: "Warhorse, furnished",
    unit: "golden dragons",
    history: [2.8, 3.0, 3.0, 3.2, 3.5, 4.0, 4.5, 5.0, 6.0, 6.8, 7.5, 8.5],
    note: "Five kings call for cavalry. Horse breeders have noticed.",
    quotes: [
      { place: "Lannisport", price: 8.0 },
      { place: "King's Landing", price: 8.5 },
      { place: "White Harbor", price: 7.5 },
    ],
  },
  {
    id: "sword",
    name: "Longsword, good steel",
    unit: "golden dragons",
    history: [1.8, 1.8, 1.9, 2.0, 2.0, 2.2, 2.4, 2.6, 3.0, 3.5, 4.2, 5.0],
    note: "Armourers of King's Landing report waiting lists. Valyrian steel is not offered at any price.",
    quotes: [
      { place: "King's Landing", price: 5.0 },
      { place: "Lannisport", price: 4.8 },
      { place: "Oldtown", price: 4.5 },
    ],
  },
  {
    id: "sellsword",
    name: "Sellsword, the day's wage",
    unit: "silver stags",
    history: [5, 5, 6, 6, 7, 8, 9, 10, 11, 12, 14, 16],
    note: "Rises with each wedding. The Brave Companions decline all fixed-term contracts.",
    quotes: [
      { place: "The riverlands", price: 22, note: "danger money" },
      { place: "The Twins", price: 18, note: "wedding season" },
      { place: "King's Landing", price: 16 },
    ],
  },
  {
    id: "gdss",
    name: "Golden Dragon per Silver Stag",
    unit: "stags per dragon",
    history: [210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210],
    note: "One golden dragon buys two hundred and ten silver stags, as it has for a century. The Iron Bank of Braavos is firm on this.",
    quotes: [
      { place: "Bendrick Stag Exchange, King's Landing", price: 210 },
      { place: "Iron Bank, Braavos", price: 210, note: "and they will remind you" },
    ],
  },
  {
    id: "stags",
    name: "Crown Stag per Dragonstone Stag",
    unit: "crown stags per dragon",
    history: [0.9, 0.8, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.35, 0.3, 0.2, 0.15],
    note: "A coin's worth is the king behind it. Stannis mints hard and honest; nobody will take it past the island.",
    quotes: [
      { place: "King's Landing", price: 0.15, note: "considered rebel coin" },
      { place: "Dragonstone", price: 1.0, note: "locals only, and only for Stannis" },
    ],
  },
];

export function changePct(c: Commodity): number {
  const first = c.history[0];
  const last = c.history[c.history.length - 1];
  return ((last - first) / first) * 100;
}

export function fmt(n: number): string {
  if (n >= 100) return n.toFixed(0);
  return n.toFixed(2).replace(/\.00$/, "");
}
