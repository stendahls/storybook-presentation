
export const colors = {
  energetic: [0, 23, 238],
  primary: [225, 207, 191],
  secondary: [39, 122, 202],
  tertiary: [102, 162, 216],
  text: [61, 61, 61],
  white: [255, 255, 255],
  black: [0, 0, 0],
  grey100: [244, 244, 244],
  grey200: [196, 196, 196],
  grey300: [116, 116, 116],
  grey400: [36, 36, 36],
} as const;

export type ColorName = keyof typeof colors;
export const toRGBA = (color: ColorName, alpha: number = 1) => `rgb(${colors[color].join(",")}, ${alpha})`;
export default colors;