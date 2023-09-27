import Button from "../Button/Button";
import StorybookIcon from "../StorybookIcon/StorybookIcon";

export type DocsLinkProps = {
  url?: string;
};

const DocsLink = ({
  url,
}: DocsLinkProps) => {
  return (
    <Button 
      text="Storybook docs" 
      startIcon={<StorybookIcon />} 
    />
  );
};

export default DocsLink;