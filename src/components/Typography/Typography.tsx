import { ReactNode } from "react";
import { CSSObject, Interpolation, Theme, css, jsx } from "@emotion/react";
import {
  ForegroundColorProps,
  useColors,
} from "../../hooks/useColors/useColors";
import useSpacing, { SpacingProps } from "../../hooks/useSpacing/useSpacing";
import useSize, { SizeProps } from "../../hooks/useSize/useSize";

export type TypographyVariant =
  | "BigHeading"
  | "MediumHeading"
  | "SmallHeading"
  | "Body"
  | "Button";

export type TypographyProps = ForegroundColorProps &
  SpacingProps &
  SizeProps & {
    as?: "h1" | "h2" | "h3" | "p" | "div" | "span" | "label";
    variant?: TypographyVariant;
    children: ReactNode | ReactNode[];
    textShadow?: boolean;
    sx?: Interpolation<Theme>;
  };

const variants: Record<TypographyVariant, CSSObject> = {
  BigHeading: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "3rem",
  },
  MediumHeading: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 400,
    fontSize: "2.5rem",
  },
  SmallHeading: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "2rem",
  },
  Body: {
    fontFamily: "'Onest', sans-serif",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.5,
  },
  Button: {
    fontFamily: "'Onest', sans-serif",
    fontSize: "1rem",
  },
};

const Typography = ({
  as = "div",
  variant = "Body",
  children,
  textShadow,
  sx,
  ...rest
}: TypographyProps) => {
  const spacing = useSpacing(rest);
  const colors = useColors(rest);
  const sizes = useSize(rest);
  return jsx(as, {
    css: [
      sx,
      colors,
      spacing,
      sizes, 
      variants[variant],
      {
        margin: 0,
        ...(textShadow && {
          textShadow: "1px 2px 4px rgba(0,0,0,.4)",
        }),
      },
    ],
    children,
  });
};

export default Typography;
