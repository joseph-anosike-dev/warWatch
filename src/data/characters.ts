export type HouseKey =
  | "lannister"
  | "stark"
  | "baratheon-dragonstone"
  | "baratheon-storms-end"
  | "greyjoy"
  | "tyrell"
  | "martell"
  | "tully"
  | "frey"
  | "bolton"
  | "arryn"
  | "nights-watch"
  | "citadel"
  | "smallfolk";

export interface House {
  key: HouseKey;
  name: string;
  words: string;
  /** oklch accent used for the crest and allegiance tag */
  accent: string;
  ink: string;
  initial: string;
}

export const HOUSES: Record<HouseKey, House> = {
  lannister: {
    key: "lannister",
    name: "Lannister",
    words: "Hear Me Roar!",
    accent: "oklch(0.52 0.16 25)",
    ink: "oklch(0.82 0.14 85)",
    initial: "L",
  },
  stark: {
    key: "stark",
    name: "Stark",
    words: "Winter Is Coming",
    accent: "oklch(0.42 0.02 250)",
    ink: "oklch(0.9 0.01 250)",
    initial: "S",
  },
  "baratheon-dragonstone": {
    key: "baratheon-dragonstone",
    name: "Baratheon of Dragonstone",
    words: "Ours Is the Fury",
    accent: "oklch(0.48 0.12 60)",
    ink: "oklch(0.93 0.05 90)",
    initial: "B",
  },
  "baratheon-storms-end": {
    key: "baratheon-storms-end",
    name: "Baratheon of King's Landing",
    words: "Ours Is the Fury",
    accent: "oklch(0.45 0.09 80)",
    ink: "oklch(0.93 0.05 90)",
    initial: "B",
  },
  greyjoy: {
    key: "greyjoy",
    name: "Greyjoy",
    words: "We Do Not Sow",
    accent: "oklch(0.36 0.03 200)",
    ink: "oklch(0.88 0.03 200)",
    initial: "G",
  },
  tyrell: {
    key: "tyrell",
    name: "Tyrell",
    words: "Growing Strong",
    accent: "oklch(0.48 0.11 150)",
    ink: "oklch(0.93 0.06 110)",
    initial: "T",
  },
  martell: {
    key: "martell",
    name: "Martell",
    words: "Unbowed, Unbent, Unbroken",
    accent: "oklch(0.6 0.15 45)",
    ink: "oklch(0.97 0.03 80)",
    initial: "M",
  },
  tully: {
    key: "tully",
    name: "Tully",
    words: "Family, Duty, Honour",
    accent: "oklch(0.45 0.09 235)",
    ink: "oklch(0.92 0.03 235)",
    initial: "T",
  },
  frey: {
    key: "frey",
    name: "Frey",
    words: "We Stand Together",
    accent: "oklch(0.5 0.04 265)",
    ink: "oklch(0.94 0.01 265)",
    initial: "F",
  },
  bolton: {
    key: "bolton",
    name: "Bolton",
    words: "Our Blades Are Sharp",
    accent: "oklch(0.35 0.05 20)",
    ink: "oklch(0.9 0.03 20)",
    initial: "B",
  },
  arryn: {
    key: "arryn",
    name: "Arryn",
    words: "As High as Honour",
    accent: "oklch(0.55 0.09 230)",
    ink: "oklch(0.97 0.01 230)",
    initial: "A",
  },
  "nights-watch": {
    key: "nights-watch",
    name: "Night's Watch",
    words: "And Now My Watch Begins",
    accent: "oklch(0.28 0.01 260)",
    ink: "oklch(0.88 0.01 260)",
    initial: "W",
  },
  citadel: {
    key: "citadel",
    name: "The Citadel",
    words: "Knowledge Is the Only Light",
    accent: "oklch(0.45 0.05 100)",
    ink: "oklch(0.95 0.02 100)",
    initial: "C",
  },
  smallfolk: {
    key: "smallfolk",
    name: "Smallfolk",
    words: "Bread, If It Please You",
    accent: "oklch(0.46 0.03 60)",
    ink: "oklch(0.94 0.02 60)",
    initial: "\u2022",
  },
};

export interface Character {
  handle: string;
  name: string;
  house: HouseKey;
  verified: boolean;
  titles: string[];
  /** Titles the war has taken; rendered struck through */
  lostTitles?: string[];
  whereabouts: string;
  bio: string;
  /** Can be chosen as your posting persona */
  playable?: boolean;
}

export const CHARACTERS: Character[] = [
  {
    handle: "tywin",
    name: "Tywin Lannister",
    house: "lannister",
    verified: true,
    titles: ["Hand of the King", "Lord of Casterly Rock", "Warden of the West", "Shield of Lannisport"],
    whereabouts: "The Red Keep, King's Landing",
    bio: "The debts are paid. All of them.",
  },
  {
    handle: "joffrey",
    name: "Joffrey Baratheon",
    house: "baratheon-storms-end",
    verified: true,
    titles: ["King of the Andals and the First Men", "Lord of the Seven Kingdoms"],
    whereabouts: "King's Landing, planning a wedding",
    bio: "I am the king. I will punish you.",
  },
  {
    handle: "cersei",
    name: "Cersei Lannister",
    house: "lannister",
    verified: true,
    titles: ["Queen Regent", "Light of the West"],
    whereabouts: "Maegor's Holdfast",
    bio: "Everyone who isn't us is an enemy. Posting through it.",
    playable: true,
  },
  {
    handle: "kingslayer",
    name: "Jaime Lannister",
    house: "lannister",
    verified: true,
    titles: ["Lord Commander of the Kingsguard"],
    lostTitles: ["Best sword in the Seven Kingdoms"],
    whereabouts: "Newly returned to King's Landing, one hand lighter",
    bio: "Learning to write left-handed. Please excuse the penmanship.",
    playable: true,
  },
  {
    handle: "imp",
    name: "Tyrion Lannister",
    house: "lannister",
    verified: true,
    titles: ["Master of Coin"],
    lostTitles: ["Acting Hand of the King"],
    whereabouts: "The Tower of the Hand, unwelcome in it",
    bio: "I drink and I know things. Chiefly the treasury figures, which are dire.",
    playable: true,
  },
  {
    handle: "stannis",
    name: "Stannis Baratheon",
    house: "baratheon-dragonstone",
    verified: true,
    titles: ["The One True King", "Lord of Dragonstone"],
    whereabouts: "Dragonstone, counting what is left",
    bio: "I am not questioning your honour. I am denying its existence.",
    playable: true,
  },
  {
    handle: "melisandre",
    name: "Melisandre of Asshai",
    house: "baratheon-dragonstone",
    verified: true,
    titles: ["Red Priestess of R'hllor"],
    whereabouts: "The Chamber of the Painted Table",
    bio: "The night is dark and full of terrors. Also of poor engagement.",
  },
  {
    handle: "onionknight",
    name: "Davos Seaworth",
    house: "baratheon-dragonstone",
    verified: true,
    titles: ["Hand of the King", "Lord of the Rainwood", "Admiral of the Narrow Sea"],
    whereabouts: "Dragonstone, lately of a cell",
    bio: "Smuggler. Reading is new to me, spelling newer still.",
    playable: true,
  },
  {
    handle: "roosebolton",
    name: "Roose Bolton",
    house: "bolton",
    verified: true,
    titles: ["Warden of the North", "Lord of the Dreadfort"],
    whereabouts: "Riding north to the Dreadfort",
    bio: "A peaceful land, a quiet people. Speaks softly.",
  },
  {
    handle: "walderfrey",
    name: "Walder Frey",
    house: "frey",
    verified: true,
    titles: ["Lord of the Crossing"],
    whereabouts: "The Twins",
    bio: "Guest right is a matter of interpretation. Ninety-one years old and posting.",
  },
  {
    handle: "olenna",
    name: "Olenna Tyrell",
    house: "tyrell",
    verified: true,
    titles: ["The Queen of Thorns"],
    whereabouts: "King's Landing, tolerating everyone",
    bio: "I have been called worse by better.",
  },
  {
    handle: "margaery",
    name: "Margaery Tyrell",
    house: "tyrell",
    verified: true,
    titles: ["Betrothed to the King"],
    lostTitles: ["Queen to Renly Baratheon"],
    whereabouts: "King's Landing, doing charity in Flea Bottom",
    bio: "Feeding the poor and being seen feeding the poor.",
  },
  {
    handle: "doran",
    name: "Doran Martell",
    house: "martell",
    verified: true,
    titles: ["Prince of Dorne", "Lord of Sunspear"],
    whereabouts: "The Water Gardens",
    bio: "Patience. My brother disagrees, loudly.",
  },
  {
    handle: "redviper",
    name: "Oberyn Martell",
    house: "martell",
    verified: true,
    titles: ["Prince of Dorne"],
    whereabouts: "The Prince's Pass, riding for King's Landing",
    bio: "Poisons, paramours, and one very long grudge.",
  },
  {
    handle: "asha",
    name: "Asha Greyjoy",
    house: "greyjoy",
    verified: true,
    titles: ["Captain of the Black Wind"],
    whereabouts: "Deepwood Motte",
    bio: "My father is drowned. My uncles are circling. See you at the kingsmoot.",
  },
  {
    handle: "victarion",
    name: "Victarion Greyjoy",
    house: "greyjoy",
    verified: true,
    titles: ["Lord Captain of the Iron Fleet"],
    whereabouts: "Moat Cailin, holding it",
    bio: "The Iron Fleet does not sow either.",
  },
  {
    handle: "sansa",
    name: "Sansa Stark",
    house: "stark",
    verified: true,
    titles: ["Lady Lannister, by marriage"],
    lostTitles: ["Of Winterfell"],
    whereabouts: "The Red Keep, a guest who may not leave",
    bio: "Courtesy is a lady's armour. Posting cryptically.",
    playable: true,
  },
  {
    handle: "arry",
    name: "Arya Stark",
    house: "stark",
    verified: false,
    titles: [],
    whereabouts: "The riverlands, on a stolen horse",
    bio: "Not a lady. Keeping a list. No, you may not see the list.",
    playable: true,
  },
  {
    handle: "jonsnow",
    name: "Jon Snow",
    house: "nights-watch",
    verified: true,
    titles: ["Steward of the Night's Watch"],
    whereabouts: "Castle Black, freshly full of arrows",
    bio: "Rode with wildlings. Came back. Explaining that at length.",
    playable: true,
  },
  {
    handle: "slayer",
    name: "Samwell Tarly",
    house: "nights-watch",
    verified: false,
    titles: ["Steward of the Night's Watch"],
    whereabouts: "Castle Black, in the library",
    bio: "Killed an Other with dragonglass. Nobody believes me. I have sources.",
    playable: true,
  },
  {
    handle: "brienne",
    name: "Brienne of Tarth",
    house: "smallfolk",
    verified: false,
    titles: ["Sworn sword"],
    whereabouts: "King's Landing, being stared at",
    bio: "Looking for Sansa Stark. Do not comment on my height.",
    playable: true,
  },
  {
    handle: "hotpie",
    name: "Hot Pie",
    house: "smallfolk",
    verified: false,
    titles: ["Baker's boy, Inn at the Crossroads"],
    whereabouts: "The Inn at the Crossroads",
    bio: "Brown bread is going for a silver stag. A SILVER STAG.",
    playable: true,
  },
  {
    handle: "fleabottomloaf",
    name: "A Baker of Flea Bottom",
    house: "smallfolk",
    verified: false,
    titles: ["Bowl of brown, purveyor of"],
    whereabouts: "Flea Bottom, King's Landing",
    bio: "Anonymous. Prices are not my fault. Ask the Reach.",
    playable: true,
  },
  {
    handle: "citadel",
    name: "The Conclave",
    house: "citadel",
    verified: true,
    titles: ["Maesters of the Citadel"],
    whereabouts: "Oldtown",
    bio: "Official ravens. We are still arguing about the white ones.",
  },
];

export const BY_HANDLE = new Map(CHARACTERS.map((c) => [c.handle, c]));

export function getCharacter(handle: string): Character | undefined {
  return BY_HANDLE.get(handle);
}
