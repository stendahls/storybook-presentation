import Box from "../Box/Box";
import MarkDown from "../Markdown/Markdown";
import Typography from "../Typography/Typography";

export type TextSlideProps = {
  type: "text";
  title: string;
  leftContent?: string;
  rightContent?: string;
};

const TextSlide = ({
  title,
  leftContent,
  rightContent,
}: TextSlideProps) => (
  <Box flexDirection="column">
    <Box width="100%" height={20} backgroundColor="primary" />
    <Typography variant="BigHeading">{title}</Typography>
    <Box gap={10}>
      {leftContent && (
        <Box>
          <Typography>
            <MarkDown>{leftContent}</MarkDown>
          </Typography>
        </Box>
      )}
      {rightContent && (
        <Box>
          <Typography>
            <MarkDown>{rightContent}</MarkDown>
          </Typography>
        </Box>
      )}
    </Box>
  </Box>
);

export default TextSlide;