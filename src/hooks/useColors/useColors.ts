
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
    background: "linear-gradient(126deg, rgba(21,34,57,1) 0%, rgba(49,86,151,1) 100%);"
  }),
});