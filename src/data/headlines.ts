export const TICKER: string[] = [
  "RED WEDDING: the King in the North and his lady mother slain at the Twins under guest right",
  "Northern host broken \u2014 some three thousand five hundred dead or taken outside the Frey walls",
  "Winterfell a burnt ruin; the ironmen who held it are gone, and no lord will name who did the sacking",
  "Moat Cailin held by the ironborn \u2014 the causeway closed to all traffic north and south",
  "Riverlands harvest burning: Ser Gregor Clegane's men reported foraging along the Trident",
  "Brown bread reaches a silver stag in King's Landing; the Reach feeds the city on Tyrell wagons",
  "Balon Greyjoy dead off a bridge at Pyke \u2014 kingsmoot called on Old Wyk",
  "Stannis Baratheon holds Dragonstone with thirteen hundred men and a red priestess",
  "Mance Rayder's host gathering beyond the Wall; the Watch counts fewer than a thousand men",
  "Royal wedding at King's Landing: seventy-seven courses promised while the granaries thin",
];

export interface KingEntry {
  name: string;
  claim: string;
  status: "alive" | "dead";
  note: string;
}

export const FIVE_KINGS: KingEntry[] = [
  {
    name: "Joffrey Baratheon",
    claim: "King on the Iron Throne",
    status: "alive",
    note: "Holds King's Landing with Lannister and Tyrell strength.",
  },
  {
    name: "Stannis Baratheon",
    claim: "King of Dragonstone",
    status: "alive",
    note: "Beaten on the Blackwater, unbroken in his own estimation.",
  },
  {
    name: "Renly Baratheon",
    claim: "King in Highgarden",
    status: "dead",
    note: "Slain in his own pavilion at Storm's End by a shadow.",
  },
  {
    name: "Robb Stark",
    claim: "King in the North and the Trident",
    status: "dead",
    note: "Murdered at the Twins with his mother and his bannermen.",
  },
  {
    name: "Balon Greyjoy",
    claim: "King of the Isles and the North",
    status: "dead",
    note: "Fell from a rope bridge at Pyke in a storm. A kingsmoot follows.",
  },
];

export const TRENDING: { tag: string; count: string }[] = [
  { tag: "The Rains of Castamere", count: "31.4k ravens" },
  { tag: "Guest Right", count: "22.9k ravens" },
  { tag: "Silver Stag Bread", count: "18.2k ravens" },
  { tag: "Moat Cailin", count: "12.7k ravens" },
  { tag: "The Kingsmoot", count: "9.8k ravens" },
  { tag: "White Ravens", count: "7.1k ravens" },
];

export interface Dispatch {
  title: string;
  body: string;
  by: string;
}

export interface DispatchSection {
  heading: string;
  blurb: string;
  items: Dispatch[];
}

export const DISPATCHES: DispatchSection[] = [
  {
    heading: "Death Tolls",
    blurb: "Counted where counting was possible. Elsewhere, estimated by the crows.",
    items: [
      {
        title: "The Twins",
        body: "King Robb Stark, Lady Catelyn Tully, and the greater part of the northern captains slain at the wedding feast of Edmure Tully and Roslin Frey. Grey Wind killed with crossbows in his pen. Northmen in the camps cut down as they drank. Those not killed were taken: the Greatjon lives, in chains.",
        by: "Ravens out of the riverlands",
      },
      {
        title: "The Blackwater",
        body: "Stannis Baratheon's assault broken by wildfire and by Lord Tywin's arrival with Tyrell strength. Ships burned in their hundreds; the river ran green. Stannis withdrew to Dragonstone with a remnant of his host.",
        by: "Harbourmaster, King's Landing",
      },
      {
        title: "Beyond the Wall",
        body: "The Great Ranging broken at the Fist of the First Men. Lord Commander Mormont slain at Craster's Keep by his own sworn brothers. Of some three hundred men, fewer than a fifth returned.",
        by: "Castle Black",
      },
    ],
  },
  {
    heading: "Captured Territories",
    blurb: "Who holds what, as of this turn of the moon.",
    items: [
      {
        title: "Moat Cailin",
        body: "Held by ironborn. The causeway is the only road through the Neck and it is shut, which severs the North from the riverlands for any host larger than a fishing party.",
        by: "Ravens out of the Neck",
      },
      {
        title: "Winterfell",
        body: "Sacked and burned, the winter town with it. The ironmen who held the castle are unaccounted for. Lord Bolton's people speak of the matter carefully and briefly.",
        by: "Ravens out of the North",
      },
      {
        title: "Harrenhal and the Trident",
        body: "Harrenhal changed hands three times this year. The riverlands themselves are held by nobody and grazed by everybody: Lannister foragers, Brave Companions, and outlaws under a hedge knight's brotherhood.",
        by: "Ravens out of the riverlands",
      },
      {
        title: "Riverrun",
        body: "Still Tully-held, and now besieged by Frey and Lannister strength. Lord Edmure a captive of his own wedding hosts.",
        by: "Ravens out of the riverlands",
      },
    ],
  },
  {
    heading: "Scarcity and Famine",
    blurb: "Prices in King's Landing, and the reasons for them.",
    items: [
      {
        title: "Bread",
        body: "Brown bread at a silver stag in King's Landing, when it can be had. The city has near half a million mouths and one road of wagons out of the Reach feeding them.",
        by: "The bakers of Flea Bottom",
      },
      {
        title: "The Burnt Harvest",
        body: "The riverlands were the granary of the crownlands. Foraging parties have taken or burned the greater part of this year's crop, and the smallfolk who would have sown the next are dead, fled, or hiding in the woods.",
        by: "Master of Coin's office",
      },
      {
        title: "Crown Debt",
        body: "Some three million gold dragons owed to House Lannister, the Faith, and the Iron Bank of Braavos. The royal wedding will run to seventy-seven courses regardless.",
        by: "Master of Coin's office",
      },
    ],
  },
  {
    heading: "From the Citadel",
    blurb: "The part everyone scrolls past.",
    items: [
      {
        title: "The Longest Summer",
        body: "Summer has stood ten years, two turns and sixteen days. The Conclave has not yet sent the white ravens. Every maester who has read the histories knows what follows a summer of that length, and every lord who has heard it has other concerns this season.",
        by: "The Conclave, Oldtown",
      },
      {
        title: "An Unverified Report",
        body: "A steward of the Night's Watch reports slaying one of the Others with a dagger of dragonglass north of the Wall. The report has been recorded. It has not been believed.",
        by: "Castle Black",
      },
    ],
  },
];
