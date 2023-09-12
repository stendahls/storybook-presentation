import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import useSpacing, { SpacingProps } from "../../hooks/useSpacing/useSpacing";
import { ColorProps, useColors } from "../../hooks/useColors/useColors";
import useFlex, { FlexProps } from "../../hooks/useFlex/useFlex";
import useBorderRadius, { BorderRadiusProps } from "../../hooks/useBorderRadius/useBorderRadius";
import useSize, { SizeProps } from "../../hooks/useSize/useSize";

export type BoxProps = 
  & ColorProps
  & SpacingProps
  & FlexProps
  & BorderRadiusProps
  & SizeProps
  & {
    children?: ReactNode | ReactNode[];
    as?: "div" | "section" | "main" | "span" | "article" | "hgroup";
  };

const Box = ({
  display = "flex",
  as = "div",
  flexDirection = "column",
  children,
  ...rest
}: BoxProps) => {
  const colors = useColors(rest);
  const flexSettings = useFlex({ display, flexDirection, ...rest });
  const spacing = useSpacing(rest);
  const borderRadius = useBorderRadius(rest);
  const size = useSize(rest);
  return jsx(as, {
    css: [colors, flexSettings, spacing, borderRadius, size],
    children
  });
};

export default Box;