import { css } from "@emotion/react";
import { mq } from "../../design-tokens/breakpoints/breakpoints";

type Size = string | number;

export type SizeProps = {
  width?: Size | Size[];
  height?: Size | Size[];
  size?: Size | Size[];
  aspectRatio?: number | number[];
};

const multiplier = 4; // Set the multiplier value here

const calculateSize = (value: Size | Size[]) => {
  if (Array.isArray(value)) {
    return value
      .filter((v) => v !== null)
      .map((v) => (typeof v === "number" ? v * multiplier : v));
  }
  return typeof value === "number" ? value * multiplier : value;
};

const useSize = (size: SizeProps) => css(mq({
  ...(typeof size.width !== "undefined" && { width: calculateSize(size.width) }),
  ...(typeof size.height !== "undefined" && { height: calculateSize(size.height) }),
  ...(typeof size.size !== "undefined" && { width: calculateSize(size.size), height: calculateSize(size.size) }),
  ...(typeof size.aspectRatio !== "undefined" && { aspectRatio: size.aspectRatio }),
}));

export default useSize;