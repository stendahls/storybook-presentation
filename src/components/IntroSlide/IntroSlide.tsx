import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export type IntroSlideProps = {
  type: "intro",
  title: string;
  subTitle?: string;
  imageSrc?: string;
};

const IntroSlide = ({
  title,
  subTitle,  
  imageSrc
}: IntroSlideProps) => (
  <Box as="article" width="100%" aspectRatio={16/9} background="gradient">
    <Box display="flex" flexDirection="row" alignItems="center" height="100%" width="100%">
      <Box as="hgroup" color="white" px={20} display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
        <Typography as="h1" variant="BigHeading">{title}</Typography>
        {subTitle && (
          <Typography as="p" variant="MediumHeading">{subTitle}</Typography>
        )}
      </Box>
      {imageSrc && (
        <Box br="50%" backgroundColor="white" width="40vw" aspectRatio={1} p={[10, 20, 40]} m={20}>
          <img alt="" src={imageSrc} css={{ width: "100%" }} />
        </Box>
      )}
    </Box>
  </Box>
);

export default IntroSlide;