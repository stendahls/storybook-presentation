import { css } from "@emotion/react";

export type BorderRadiusProps = {
  br?: string | number; // border-radius
  bssr?: string | number; // border-start-start-radius
  bser?: string | number; // border-start-end-radius
  besr?: string | number; // border-end-start-radius
  beer?: string | number; // border-end-end-radius
};

const multiplier = 4;

const getValue = (radius: string | number) => typeof radius === "number" ? radius * multiplier : radius;

const useBorderRadius = (borderRadius: BorderRadiusProps) => css({
  ...(typeof borderRadius.br !== "undefined" && { borderRadius: getValue(borderRadius.br)}),
  ...(typeof borderRadius.bssr !== "undefined" && { borderStartStartRadius: getValue(borderRadius.bssr)}),
  ...(typeof borderRadius.bser !== "undefined" && { borderStartEndRadius: getValue(borderRadius.bser)}),
  ...(typeof borderRadius.besr !== "undefined" && { borderEndStartRadius: getValue(borderRadius.besr) }),
  ...(typeof borderRadius.beer !== "undefined" && { borderEndEndRadius: getValue(borderRadius.beer) }),
});

export default useBorderRadius;