import { ReactNode, forwardRef } from "react";
import Typography from "../Typography/Typography";
import { BackgroundColorProps, useColors } from "../../hooks/useColors/useColors";
import Box from "../Box/Box";
import colors, { colorsRGB } from "../../design-tokens/colors/colors";
import { CSSObject } from "@emotion/react";

export type ButtonVariant = "primary" | "secondary" | "grey100";

export type ButtonProps = 
  & BackgroundColorProps
  & {
    /** The text of the button. */
    text: string;
    variant?: ButtonVariant;
    startIcon?: ReactNode;
    onClick?: () => void;
  };

const variants: Record<ButtonVariant, CSSObject> = {
  "primary": {

  },
  "secondary": {

  },
  "grey100": {
    color: `rgba(${colors.black.join(",")})`,
    backgroundColor: `rgba(${colors.grey100.join(",")})`,
  }
};

const Button = forwardRef<
HTMLButtonElement,
ButtonProps
>(({
  text,
  startIcon,
  backgroundColor = "grey100",
  onClick,
  ...rest
}, ref) => {
  const colors = useColors({ backgroundColor });
  return (
    <button 
      ref={ref}
      onClick={onClick}
      css={[colors, {
        display: "inline-flex",
        cursor: "pointer",
        borderRadius: 16,
        padding: "0 32px",
        height: 48,
        appearance: "none",
        border: "none",
        alignItems: "center",
      }]}
    >
      {startIcon && (
        <Box size={5} mr={2} ml={-4}>
          {startIcon}
        </Box>
      )}
      <Typography variant="Button" as="span">{text}</Typography>
    </button>
  );
});

Button.displayName = "Button";
export default Button;
