export const PRIMARY = {
  1: "#DFDFDF",   // FAV
  2: "#E8D7F1",
  3: "#DADDD8",
  4: "#D4E4BC",
  5: "#FECEE9",
};

export const ACCENT = {
  1: "#231123",
  2: "#065A82",
  3: "#0B6F50",
  4: "#F15946",
  5: "#F9C22E",
  6: "#9A031E",
};

export const FONT = {
  INPUT: {
    1: "#86939e",
    2: "#087AAF",
  },
  SUBTEXT: {
    1: "grey",
  },
};

const Color = {
  PRIMARY: PRIMARY[2],
  ACCENT: ACCENT[1],
  FONT: {
    INPUT: FONT.INPUT[1],
  },
};

export const changePrimary = (choice: number) => Color.PRIMARY = PRIMARY[choice];
export const changeAccent = (choice: number) => Color.ACCENT = ACCENT[choice];


export default Color;
