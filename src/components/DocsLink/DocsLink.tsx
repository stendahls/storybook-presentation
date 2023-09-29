import { useCallback } from "react";
import Button from "../Button/Button";
import ChromaticIcon from "../ChromaticIcon/ChromaticIcon";
import StorybookIcon from "../StorybookIcon/StorybookIcon";

export type DocsLinkProps = {
  type?: "storybook" | "chromatic";
  url?: string;
};

const DocsLink = ({
  type = "storybook",
  url,
}: DocsLinkProps) => {
  const onClick = useCallback(() => {
    window.open(url);
  }, [url]);
  return (
    <Button 
      onClick={onClick}
      text={"Documentation"} 
      startIcon={type === "storybook" ? <StorybookIcon /> : <ChromaticIcon />} 
    />
  );
};

export default DocsLink;