import { ButtonLink } from "../Button/Button";
import ChromaticIcon from "../ChromaticIcon/ChromaticIcon";
import StorybookIcon from "../StorybookIcon/StorybookIcon";

export type DocsLinkProps = {
  type?: "storybook" | "chromatic";
  url?: string;
};

const DocsLink = ({
  type = "storybook",
  url,
}: DocsLinkProps) => (
  <ButtonLink 
    text={"Documentation"} 
    target="_blank"
    href={url}
    startIcon={type === "storybook" ? <StorybookIcon /> : <ChromaticIcon />} 
  />
);

export default DocsLink;