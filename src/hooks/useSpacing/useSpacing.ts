import { css } from "@emotion/react";
import { Responsive, mq } from "../../design-tokens/breakpoints/breakpoints";

export const multiplier = 4;

export type SpacingProps = MarginProps & PaddingProps;

export type MarginProps = {
  m?: Responsive<number>; // margin
  mt?: Responsive<number>; // margin-top
  mr?: Responsive<number>; // margin-right
  mb?: Responsive<number>; // margin-bottom
  ml?: Responsive<number>; // margin-left
  mx?: Responsive<number>; // margin-left and margin-right
  my?: Responsive<number>; // margin-top and margin-bottom
};

export type PaddingProps = {
  p?: Responsive<number>; // padding
  pt?: Responsive<number>; // padding-top
  pr?: Responsive<number>; // padding-right
  pb?: Responsive<number>; // padding-bottom
  pl?: Responsive<number>; // padding-left
  px?: Responsive<number>; // padding-left and padding-right
  py?: Responsive<number>; // padding-top and padding-bottom
};

const multiply = (value: Responsive<number> | undefined) => {
  if (typeof(value) === "undefined") { return undefined; }
  if (Array.isArray(value)) { return value.map((v) => v * multiplier)}
  return value * multiplier;
};

const useSpacing = (spacing: MarginProps & PaddingProps) => css(mq({
  ...(typeof spacing.m !== "undefined" && { margin: multiply(spacing.m) }),
  ...(typeof spacing.mt !== "undefined" && { marginTop: multiply(spacing.mt) }),
  ...(typeof spacing.mr !== "undefined" && { marginRight: multiply(spacing.mr) }),
  ...(typeof spacing.mb !== "undefined" && { marginBottom: multiply(spacing.mb) }),
  ...(typeof spacing.ml !== "undefined" && { marginLeft: multiply(spacing.ml) }),
  ...(typeof spacing.mx !== "undefined" && { marginLeft: multiply(spacing.mx), marginRight: multiply(spacing.mx) }),
  ...(typeof spacing.my !== "undefined" && { marginTop: multiply(spacing.my), marginBottom: multiply(spacing.my) }),
  ...(typeof spacing.p !== "undefined" && { padding: multiply(spacing.p) }),
  ...(typeof spacing.pt !== "undefined" && { paddingTop: multiply(spacing.pt) }),
  ...(typeof spacing.pr !== "undefined" && { paddingRight: multiply(spacing.pr) }),
  ...(typeof spacing.pb !== "undefined" && { paddingBottom: multiply(spacing.pb) }),
  ...(typeof spacing.pl !== "undefined" && { paddingLeft: multiply(spacing.pl) }),
  ...(typeof spacing.px !== "undefined" && { paddingLeft: multiply(spacing.px), paddingRight: multiply(spacing.px) }),
  ...(typeof spacing.py !== "undefined" && { paddingTop: multiply(spacing.py), paddingBottom: multiply(spacing.py) })
}));

export default useSpacing;