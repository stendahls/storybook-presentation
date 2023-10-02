import Box from "../Box/Box";
import ChromaticIcon from "../ChromaticIcon/ChromaticIcon";
import StorybookIcon from "../StorybookIcon/StorybookIcon";
import Typography from "../Typography/Typography";

export type IntroSlideProps = {
  type: "intro";
  title: string;
  subTitle?: string;
  imageSrc?: string;
};

const IntroSlide = ({ title, subTitle, imageSrc }: IntroSlideProps) => (
  <Box as="article" width="100%" aspectRatio={16 / 9} backgroundColor="energetic">
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Box
        sx={{
          textAlign: "center",
        }}
        as="hgroup"
        color="white"
        px={20}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flexGrow={1}
      >
        <Typography as="h1" variant="BigHeading">
          {title}
        </Typography>
        {subTitle && (
          <Typography as="p" variant="MediumHeading">
            {subTitle}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          border: "solid 5px var(--color-black)",
          boxShadow: "10px 10px var(--color-black)",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        br="50%"
        backgroundColor="white"
        width="30vw"
        aspectRatio={1}
        m={20}
      >
        <StorybookIcon size="50%" />
        <ChromaticIcon size="40%" />
      </Box>
    </Box>
  </Box>
);

export default IntroSlide;
