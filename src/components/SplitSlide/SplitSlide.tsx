import Box from "../Box/Box";

export type SplitSlideProps = {
  type: "split",
};

const SplitSlide = ({

}: SplitSlideProps) => (
  <Box aspectRatio={16/9} flexDirection="row">
    <Box background="gradient" width="35%" flexGrow={0} flexShrink={0}>

    </Box>
    <Box backgroundColor="white" flexGrow={1} flexShrink={0}>

    </Box>
  </Box>
);

export default SplitSlide;