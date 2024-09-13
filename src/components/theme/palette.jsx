import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const DEFAULT = "#ECECEE";
const DENSE = "#D4D4D6";

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

// const PRIMARY = {
//   lighter: '#2dcf7b',
//   light: '#22b569',
//   main: '#199A57',
//   dark: '#107a43',
//   darker: '#0a572f',
//   contrastText: '#fff',
// };

const PRIMARY = {
  lighter: "#a8d15a", //'#add180',
  light: "#82a63d", //'#92b565',
  main: "#638129", //'#76984b',
  dark: "#4d661d", //'#608038',
  darker: "#3b4f14", //'#4a6628',
  contrastText: "#fff",
};

// const SECONDARY = {
//   lighter: "#4A9AB3", //'#a4a4a4',
//   light: "#3D8094", //'#909090',
//   main: "#346D7E", // '#7c7c7c', //'#adb5bd', //#7b809a
//   dark: "#2D5F6E", // '# 686868',
//   darker: "#27525E", //'#545454',
//   contrastText: '#fff',
// };
const SECONDARY = {
  lighter: "#39798C", //'#a4a4a4',
  light: "#346E80", //'#909090',
  main: "#2F6373", // '#7c7c7c', //'#adb5bd', //#7b809a
  dark: "#2A5866", // '# 686868',
  darker: "#224854", //'#545454',
  contrastText: "#fff",
};

// const NEUTRAL = {
//   lighter: "#E8E8EB", //'#a4a4a4',
//   light: "#DCDCDE", //'#909090',
//   main: "#D2D2D4", // '#7c7c7c', //'#adb5bd', //#7b809a
//   dark: "#C8C8C9", // '# 686868',
//   darker: "#BBBBBD", //'#545454',
//   contrastText: '#4C4C4D',
// };
// const NEUTRAL = {
//   lighter: "#FBFBFC", //'#a4a4a4',
//   light: "#F1F1F2", //'#909090',
//   main: "#ECECED", // '#7c7c7c', //'#adb5bd', //#7b809a
//   dark: "#E4E4E6", // '# 686868',
//   darker: "#DADADB", //'#545454',
//   contrastText: '#636363',
// };

const NEUTRAL = {
  lighter: "#FBFBFC", //'#a4a4a4',
  light: "#F1F1F2", //'#909090',
  main: "#ECECED", // '#7c7c7c', //'#adb5bd', //#7b809a
  dark: "#E4E4E6", // '# 686868',
  darker: "#DADADB", //'#545454',
  contrastText: "#636363",
};
// #ECECEE
// #D9DDE0

// const NEUTRAL = {
// 	lighter: "#f8f9fa", //GREY[100],
// 	light: "#f0f2f5", //GREY[200],
// 	main: "#dee2e6", // GREY[300],
// 	dark: "#ced4da", //GREY[400],
// 	darker: "#adb5bd", //GREY[500],
// 	contrastText: "#727272", //"#727272", 343a40
// };

const DARK = {
  lighter: "#42424a",
  light: "#343438",
  main: "#29292b", //#7b809a
  dark: "#242323",
  darker: "#191919",
  contrastText: "#ffffff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.lighter, SECONDARY.light),
  // epic: createGradient(EPIC.lighter, EPIC.darker),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  neutral: createGradient(NEUTRAL.light, NEUTRAL.dark),
  // dark: createGradient(GREY[600],GREY[800]),
  dark: createGradient(DARK.lighter, DARK.darker),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const palette = {
  // common: { black: '#000', white: '#fff' },
  common: { black: "#3D3D3D", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  // epic: { ...EPIC },
  neutral: { ...NEUTRAL },
  dark: { ...DARK },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  // text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  text: { primary: "#3D3D3D", secondary: "#828282", disabled: "#A5A5A6" },
  // background: { paper: '#fff', default: GREY[200], neutral: GREY[300] },#ececee
  background: { paper: "#fff", default: DEFAULT, neutral: DENSE }, //#f0f2f5  #e7e7e9
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
