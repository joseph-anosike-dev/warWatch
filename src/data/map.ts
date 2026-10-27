import type { HouseKey } from "@/data/characters";

/**
 * Stylized map of Westeros. Coast and marker positions are approximate
 * by design — a maester's sketch, not a cartographer's survey.
 * Coordinates live in a 100 x 165 viewBox.
 */

export type XY = [number, number];

export const COAST: XY[] = [
  [46, 3], [54, 4], [58, 8], [56, 12], [61, 16], [59, 21], [65, 25], [62, 29],
  [66, 33], [63, 37], [68, 39], [59, 44], [62, 48], [64, 53], [59, 57],
  [60, 61], [68, 62], [75, 65], [79, 69], [76, 73], [72, 77], [79, 81],
  [84, 83], [79, 87], [81, 91], [76, 94], [80, 97], [77, 101], [82, 105],
  [79, 110], [83, 114], [80, 119], [76, 124], [80, 128], [74, 132], [66, 130],
  [60, 124], [55, 119], [50, 117], [45, 112], [42, 109], [37, 110], [34, 104],
  [37, 99], [32, 93], [36, 88], [32, 83], [35, 78], [38, 73], [35, 69],
  [39, 65], [37, 61], [34, 57], [36, 53], [31, 49], [33, 45], [29, 41],
  [31, 37], [27, 33], [30, 29], [27, 25], [31, 21], [35, 17], [39, 11],
  [43, 6],
];

export const WALL: XY = [36, 17];
export const WALL_END: XY = [61, 17];

export const ISLANDS: { cx: number; cy: number; rx: number; ry: number }[] = [
  { cx: 25, cy: 37, rx: 3, ry: 2.2 }, // Bear Island
  { cx: 24, cy: 72, rx: 2.4, ry: 1.8 }, // Pyke
  { cx: 18, cy: 78, rx: 2.4, ry: 1.8 }, // Old Wyk
  { cx: 86, cy: 92, rx: 2.8, ry: 2 }, // Dragonstone
];

export interface Holding {
  name: string;
  x: number;
  y: number;
  house: HouseKey;
  note: string;
}

export const HOLDINGS: Holding[] = [
  { name: "Beyond the Wall", x: 48, y: 9, house: "wildling", note: "Mance Rayder's host, harrying the Wall with giants and mammoths." },
  { name: "Castle Black", x: 47, y: 19, house: "nights-watch", note: "The Watch, fewer than a thousand men and falling." },
  { name: "Eastwatch-by-the-Sea", x: 57, y: 19, house: "nights-watch", note: "The Watch's port. Ships, salt, and bad news." },
  { name: "Shadow Tower", x: 38, y: 19, house: "nights-watch", note: "The western watch. Nobody mans it gladly." },
  { name: "Karhold", x: 61, y: 31, house: "stark", note: "Karstark. Lord Rickard died at the Twins; his men ride home angry." },
  { name: "Last Hearth", x: 57, y: 35, house: "stark", note: "Umber. The Greatjon lives — in chains at the Twins." },
  { name: "Dreadfort", x: 58, y: 45, house: "bolton", note: "Roose Bolton, lately of the Twins." },
  { name: "Winterfell", x: 50, y: 48, house: "bolton", note: "A burnt ruin. Held in Bolton's name; nobody says who set the fires." },
  { name: "White Harbor", x: 59, y: 49, house: "stark", note: "Manderly, the richest northern port. Hedges its loyalty like a moneylender." },
  { name: "Barrowton", x: 54, y: 52, house: "stark", note: "Lady Dustin, sour on the Freys and saying so." },
  { name: "Torrhen's Square", x: 44, y: 49, house: "greyjoy", note: "Held by Dagmer Cleftjaw's ironborn." },
  { name: "Deepwood Motte", x: 39, y: 45, house: "greyjoy", note: "Asha Greyjoy's capture, still flying the kraken." },
  { name: "Bear Island", x: 25, y: 37, house: "stark", note: "The Mormonts. The Old Bear dead beyond the Wall; the isle still answers the Starks." },
  { name: "Moat Cailin", x: 47, y: 57, house: "greyjoy", note: "Ironborn. The causeway is the only road north, and it is shut." },
  { name: "Greywater Watch", x: 41, y: 58, house: "stark", note: "The crannogmen. No host has found it twice." },
  { name: "The Eyrie", x: 70, y: 68, house: "arryn", note: "Lady Lysa. The Vale sits out the war entirely." },
  { name: "Seagard", x: 45, y: 66, house: "tully", note: "Mallister, holding out under Frey siege." },
  { name: "The Twins", x: 46, y: 71, house: "frey", note: "Walder Frey. Where the Red Wedding was served." },
  { name: "Riverrun", x: 52, y: 77, house: "tully", note: "Tully. Edmure a captive; the Blackfish holds the gates." },
  { name: "Harrenhal", x: 66, y: 78, house: "lannister", note: "Gregor Clegane's men, the third banner over it this year." },
  { name: "Casterly Rock", x: 37, y: 86, house: "lannister", note: "Tywin Lannister's seat, quietly paying for everything." },
  { name: "King's Landing", x: 72, y: 90, house: "baratheon-storms-end", note: "Joffrey's crown. Half a million mouths, one road of wagons." },
  { name: "Dragonstone", x: 86, y: 92, house: "baratheon-dragonstone", note: "Stannis. Thirteen hundred men, a red priestess, and right on his side (his own)." },
  { name: "Storm's End", x: 76, y: 102, house: "baratheon-storms-end", note: "The crown's, since Ser Cortnay Penrose died by shadow." },
  { name: "Pyke", x: 24, y: 72, house: "greyjoy", note: "A dead king off a rope bridge; a kingsmoot coming." },
  { name: "Old Wyk", x: 18, y: 78, house: "greyjoy", note: "The kingsmoot gathers. Come armed." },
  { name: "Highgarden", x: 50, y: 101, house: "tyrell", note: "Mace Tyrell. The Reach feeds the crown and prices the wedding." },
  { name: "Oldtown", x: 57, y: 113, house: "tyrell", note: "The Citadel and the Hightower. The white ravens wait here." },
  { name: "Sunspear", x: 72, y: 126, house: "martell", note: "Doran Martell. Dorne watches, and Oberyn rides." },
];

export function coastPath(): string {
  return (
    COAST.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ") + " Z"
  );
}

export function shieldPath(x: number, y: number): string {
  return `M ${x - 4.5} ${y - 5.5} h 9 v 6 q 0 3.5 -4.5 5 q -4.5 -1.5 -4.5 -5 Z`;
}
