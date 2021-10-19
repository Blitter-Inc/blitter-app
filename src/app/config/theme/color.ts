const OrangePalette = {
  ACCENT: "#F15946",
  SECONDARY: "#F47867",
  PLACEHOLDER: "#FACCC6",
}

export const PRIMARY = {
  1: "#E8D7F1",
  2: "#DFDFDF",
  3: "#DADDD8",
  4: "#D4E4BC",
  5: "#FECEE9",
  6: "#FFF",
};

export const SECONDARY = {
  1: "#371B37",
  2: "#442244",
  3: "#512951",
  4: OrangePalette.SECONDARY,
};

export const ACCENT = {
  1: "#231123",
  2: "#065A82",
  3: "#0B6F50",
  4: OrangePalette.ACCENT,
  5: "#F9C22E",
  6: "#9A031E",
};

export const FONT = {
  INPUT: {
    1: OrangePalette.ACCENT,
    2: "#86939e",
    3: "#087AAF",
    4: "#fff",
  },
  PLACEHOLDER: {
    1: OrangePalette.PLACEHOLDER,
    2: "#fff",
  },
  SUBTEXT: {
    1: "grey",
  },
  TEXT: {
    1: "#fff"
  },
};

const Color = {
  PRIMARY: PRIMARY[6],
  SECONDARY: SECONDARY[4],
  ACCENT: ACCENT[4],
  FONT: {
    INPUT: FONT.INPUT[1],
    PLACEHOLDER: FONT.PLACEHOLDER[1],
    SUBTEXT: FONT.SUBTEXT[1],
    TEXT: FONT.TEXT[1],
  },
};


export default Color;
