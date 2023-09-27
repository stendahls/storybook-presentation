import Box from "../Box/Box";
import DocsLink from "../DocsLink/DocsLink";
import MarkDown from "../Markdown/Markdown";
import Typography from "../Typography/Typography";

export type SplitSlideProps = {
  type: "split";
  title?: string;
  subTitle?: string;
  content?: string;
  docsLink?: string;
};

const SplitSlide = ({
  title,
  subTitle,
  content,
  docsLink,
}: SplitSlideProps) => (
  <Box size="100%" flexDirection="row">
    <Box background="gradient" width="35%" flexGrow={0} flexShrink={0} alignItems="center" justifyContent="center" flexDirection="column">
      <Box sx={{ textAlign: "end" }} as="hgroup" color="white" px={20} display="flex" flexDirection="column" alignItems="flex-end">
        <Typography as="h1" variant="BigHeading" textShadow>{title}</Typography>
        {subTitle && (
          <Typography as="p" variant="MediumHeading" textShadow>{subTitle}</Typography>
        )}
      </Box>
      {docsLink && (
        <Box mt={10}>
          <DocsLink url={docsLink} />
        </Box>
      )}
    </Box>
    <Box display="flex" justifyContent="flex-start" alignContent="center" backgroundColor="white" flexGrow={1} flexShrink={1} p={20} flexWrap="wrap">
      {content && (
        <Typography width="100%">
          <MarkDown>{content}</MarkDown>
        </Typography>
      )}
    </Box> 
  </Box>
);

export default SplitSlide;