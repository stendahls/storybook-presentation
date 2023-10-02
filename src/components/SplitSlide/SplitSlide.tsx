import Box from "../Box/Box";
import DocsLink from "../DocsLink/DocsLink";
import MarkDown from "../Markdown/Markdown";
import StorybookIcon from "../StorybookIcon/StorybookIcon";
import Typography from "../Typography/Typography";

export type SplitSlideProps = {
  type: "split";
  title?: string;
  subTitle?: string;
  content?: string;
  docsLink?: string;
  docsType?: "storybook" | "chromatic";
};

const SplitSlide = ({
  title,
  subTitle,
  content,
  docsLink,
  docsType,
}: SplitSlideProps) => (
  <Box size="100%" flexDirection="row">
    <Box sx={{ position: "relative" }} backgroundColor="primary" width="35%" flexGrow={0} flexShrink={0} alignItems="center" justifyContent="center" flexDirection="column">
      <Box sx={{ border: "solid 3px var(--color-black)", boxShadow: "5px 5px var(--color-black)"}} size={30} br={10} backgroundColor="white" p={5}>
        <StorybookIcon width="100%" />
      </Box>
      <Box sx={{ textAlign: "end" }} as="hgroup" color="black" px={20} display="flex" flexDirection="column" alignItems="flex-end">
        <Typography as="h1" variant="BigHeading">{title}</Typography>
        {subTitle && (
          <Typography as="p" variant="MediumHeading">{subTitle}</Typography>
        )}
      </Box>
      {docsLink && (
        <Box mt={10}>
          <DocsLink type={docsType} url={docsLink} />
        </Box>
      )}
    </Box>
    <Box 
      display="flex" 
      justifyContent="flex-start" 
      alignContent="center" 
      backgroundColor="white" 
      flexGrow={1} 
      flexShrink={1} 
      p={20} 
      flexWrap="wrap"
      sx={{ overflow: "hidden" }}
    >
      {content && (
        <Typography sx={{ maxHeight: "100%", overflowY: "auto" }} width="100%">
          <MarkDown>{content}</MarkDown>
        </Typography>
      )}
    </Box> 
  </Box>
);

export default SplitSlide;