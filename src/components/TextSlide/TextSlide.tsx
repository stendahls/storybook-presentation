import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export type TextSlideProps = {
  type: "text";
  title: string;
};

const TextSlide = ({
  title,
}: TextSlideProps) => (
  <Box>
    <Box width="100%" height={20} background="gradient" />
    <Box />
    <Typography variant="BigHeading">{title}</Typography>
  </Box>
);

export default TextSlide;