import { Interpolation, Theme, jsx } from "@emotion/react";
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
    sx?: Interpolation<Theme>;
  };

const Box = ({
  display = "flex",
  as = "div",
  children,
  sx,
  ...rest
}: BoxProps) => {
  const colors = useColors(rest);
  const flexSettings = useFlex({ display, ...rest });
  const spacing = useSpacing(rest);
  const borderRadius = useBorderRadius(rest);
  const size = useSize(rest);
  return jsx(as, {
    css: [colors, flexSettings, spacing, borderRadius, size, sx],
    children
  });
};

export default Box;