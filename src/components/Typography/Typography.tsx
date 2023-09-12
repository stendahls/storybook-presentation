import { ReactNode } from "react";
import { SerializedStyles, css, jsx } from "@emotion/react";
import { ForegroundColorProps, useColors } from "../../hooks/useColors/useColors";
import useSpacing, { SpacingProps } from "../../hooks/useSpacing/useSpacing";

export type TypographyVariant = "BigHeading" | "MediumHeading" | "SmallHeading" | "Body";

export type TypographyProps = 
  & ForegroundColorProps 
  & SpacingProps
  & {
    as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
    variant?: TypographyVariant;
    children: ReactNode | ReactNode[];
  };

const variants: Record<TypographyVariant, SerializedStyles> = {
  "BigHeading": css`
    font-weight: 700;
    font-size: 3rem;  
  `,
  "MediumHeading": css`
    font-weight: 700;
    font-size: 2rem;
  `,
  "SmallHeading": css`
    font-weight: 700;
    font-size: 1.2rem;
  `,
  "Body": css`
    font-weight: 400;
    font-size: 1rem;
  `,
};

const Typography = ({
  as = "div",
  variant = "Body",
  children,
  ...rest
}: TypographyProps) => {
  const spacing = useSpacing(rest);
  const colors = useColors(rest);
  return jsx(as, {
    css: css(
      colors,
      spacing,
      variants[variant], {
        fontFamily: "'Open Sans', sans-serif",
        margin: 0,
      }
    ),
    children,
  });
};

export default Typography;