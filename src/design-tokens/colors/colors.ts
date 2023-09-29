
const colors = {
  primary: [75, 0, 153],
  secondary: [39, 122, 202],
  tertiary: [102, 162, 216],
  grey100: [233, 233, 233],
  text: [61, 61, 61],
  white: [255, 255, 255],
  black: [0, 0, 0],
} as const;

export type ColorName = keyof typeof colors;
export const toRGB = (color: ColorName) => `rgb(${colors[color].join(",")})`;

export default colors;