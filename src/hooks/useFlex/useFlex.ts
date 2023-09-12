import { css } from "@emotion/react";

export type FlexProps = FlexContainerProps & FlexItemProps;

export type FlexContainerProps = {
  display?: "inline-flex" | "flex";
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | "inherit" | "initial" | "unset",
  alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch",
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse",
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
  gap?: number;
};

export type FlexItemProps = {
  flexGrow?: 0 | 1 | 2 | 3;
  flexShrink?: 0 | 1 | 2 | 3;
  flexBasis?: 0 | "auto";
  justifySelf?: "center" | "flex-end" | "flex-start" | "stretch";
  alignSelf?: "center" | "flex-end" | "flex-start" | "stretch";
  order?: number;
};

const useFlex = (flex: FlexContainerProps & FlexItemProps) => css({
  ...(typeof flex.display !== "undefined" && { display: flex.display }),
  ...(typeof flex.alignContent !== "undefined" && { alignContent: flex.alignContent }),
  ...(typeof flex.justifyContent !== "undefined" && { justifyContent: flex.justifyContent }),
  ...(typeof flex.flexWrap !== "undefined" && { flexWrap: flex.flexWrap }),
  ...(typeof flex.flexDirection !== "undefined" && { flexDirection: flex.flexDirection }),
  ...(typeof flex.gap === "number" && { gap: flex.gap * 4 }),
  ...(typeof flex.alignItems !== "undefined" && { alignItems: flex.alignItems }),
  ...(typeof flex.flexGrow !== "undefined" && { flexGrow: flex.flexGrow }),
  ...(typeof flex.flexShrink !== "undefined" && { flexShrink: flex.flexShrink }),
  ...(typeof flex.flexBasis !== "undefined" && { flexBasis: flex.flexBasis }),
  ...(typeof flex.justifySelf !== "undefined" && { justifySelf: flex.justifySelf }),
  ...(typeof flex.alignSelf !== "undefined" && { alignSelf: flex.alignSelf }),
  ...(typeof flex.order !== "undefined" && { order: flex.order }),
});

export default useFlex;