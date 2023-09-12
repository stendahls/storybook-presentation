import { forwardRef } from "react";
import Typography from "../Typography/Typography";
import { BackgroundColorProps, useColors } from "../../hooks/useColors/useColors";

export type ButtonProps = 
  & BackgroundColorProps
  & {
    /** The text of the button. */
    text: string;
  };

const Button = forwardRef<
HTMLButtonElement,
ButtonProps
>(({
  text,
  backgroundColor = "primary",
  ...rest
}, ref) => {
  const colors = useColors({ backgroundColor });
  return (
    <button 
      ref={ref}
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
        <Typography variant="SmallHeading" color="white" as="span">{text}</Typography>
    </button>
  );
});

Button.displayName = "Button";
export default Button;
