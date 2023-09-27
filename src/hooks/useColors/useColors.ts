
import { css } from "@emotion/react";
import colors from "../../design-tokens/colors/colors";

export type Colors = keyof typeof colors;

export type ForegroundColorProps = {
  color?: Colors;
  colorAlpha?: number;
};

export type BackgroundColorProps = {
  backgroundColor?: Colors; 
  background?: "gradient",
  backgroundColorAlpha?: number;
}

export type ColorProps = 
  & ForegroundColorProps
  & BackgroundColorProps;

export const useColors = ({ color, colorAlpha, backgroundColor, backgroundColorAlpha, background }: ColorProps) => css({
  ...(!!color && { color: `rgba(${colors[color].join(",")},${colorAlpha ?? 1})` }),
  ...(!!backgroundColor && { 
    backgroundColor: `rgba(${colors[backgroundColor].join(",")},${backgroundColorAlpha ?? 1})`
  }),
  ...(background === "gradient" && {
    background: `linear-gradient(126deg, rgb(150 183 199) 0%, rgb(60 106 150) 40%, rgb(38 76 110) 100%);`
  }),
});