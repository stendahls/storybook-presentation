import { ReactNode, useEffect, useRef } from "react";
import Box from "../Box/Box";

export type DialogProps = {
  open?: boolean;
  children: ReactNode | ReactNode[];
};

const Dialog = ({
  open,
  children,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) { dialogRef.current?.showModal(); }
    else { dialogRef.current?.close(); }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      css={{
        border: "none",
        background: "transparent",
        padding: 0,
        width: "80%",
        "&::backdrop": {
          backgroundColor: "rgba(0,0,0,.6)",
        }
      }}
    >
      <Box backgroundColor="white" br={4} p={10}>
        {children}
      </Box>
    </dialog>
  );
};

export default Dialog;