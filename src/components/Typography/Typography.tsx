import { ReactNode } from "react";
import { CSSObject, css, jsx } from "@emotion/react";
import type * as CSS from 'csstype';
import { ForegroundColorProps, useColors } from "../../hooks/useColors/useColors";
import useSpacing, { SpacingProps } from "../../hooks/useSpacing/useSpacing";
import useSize, { SizeProps } from "../../hooks/useSize/useSize";

export type TypographyVariant = "BigHeading" | "MediumHeading" | "SmallHeading" | "Body" | "Button";

export type TypographyProps = 
  & ForegroundColorProps 
  & SpacingProps
  & SizeProps
  & {
    as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
    variant?: TypographyVariant;
    children: ReactNode | ReactNode[];
    textShadow?: boolean;
  };

const variants: Record<TypographyVariant, CSSObject> = {
  "BigHeading": {
    fontWeight: 700,
    fontSize: "3rem", 
  },
  "MediumHeading": {
    fontWeight: 400,
    fontSize: "2.5rem",
  },
  "SmallHeading": {
    fontWeight: 700,
    fontSize: "2rem",
  },
  "Body": {
    fontWeight: 400,
    fontSize: "1.8rem",
  },
  "Button": {
    fontSize: "1rem",
  }
};

const Typography = ({
  as = "div",
  variant = "Body",
  children,
  textShadow,
  ...rest
}: TypographyProps) => {
  const spacing = useSpacing(rest);
  const colors = useColors(rest);
  const sizes = useSize(rest);
  return jsx(as, {
    css: css(
      colors,
      spacing,
      sizes,
      variants[variant], {
        fontFamily: "'Open Sans', sans-serif",
        margin: 0,
        ...(textShadow && {
          textShadow: "1px 2px 4px rgba(0,0,0,.4)",
        }),
      }
    ),
    children,
  });
};

export default Typography;