import { ReactNode, forwardRef } from "react";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";
import { toRGBA } from "../../design-tokens/colors/colors";
import { CSSObject } from "@emotion/react";

export type ButtonVariant = "primary" | "secondary" | "grey100";

export type ButtonProps = 
  & {
    /** The text of the button. */
    text: string;
    variant?: ButtonVariant;
    startIcon?: ReactNode;
    onClick?: () => void;
  };

const variants: Record<ButtonVariant, CSSObject> = {
  "primary": {
    color: toRGBA("white"),
    backgroundColor: toRGBA("primary"),
  },
  "secondary": {
    color: toRGBA("white"),
    backgroundColor: toRGBA("secondary"),
  },
  "grey100": {
    color: toRGBA("black"),
    backgroundColor: toRGBA("grey100"),
    "&:hover": {

    }
  }
};

const buttonStyle: CSSObject = {
  display: "inline-flex",
  cursor: "pointer",
  borderRadius: 16,
  padding: "0 32px",
  height: 48,
  appearance: "none",
  border: "none",
  alignItems: "center",
}

const Button = forwardRef<
HTMLButtonElement,
ButtonProps
>(({
  text,
  startIcon,
  variant = "grey100",
  onClick,
  ...rest
}, ref) => {
  return (
    <button 
      ref={ref}
      onClick={onClick}
      css={[variants[variant], buttonStyle]}
      {...rest}
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

export type ButtonLinkProps = 
  & ButtonProps
  & {
    href?: string;
    target?: string;
  }
export const ButtonLink = ({
  text,
  startIcon,
  variant = "grey100",
  ...rest
}: ButtonLinkProps) => (
  <a
    css={[variants[variant], buttonStyle, {
      textDecoration: "none",
    }]}
    {...rest}
  >
    {startIcon && (
      <Box size={5} mr={2} ml={-4}>
        {startIcon}
      </Box>
    )}
    <Typography variant="Button" as="span">{text}</Typography>
  </a>
);


export default Button;
