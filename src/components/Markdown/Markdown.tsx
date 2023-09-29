import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import colors, { toRGB } from "../../design-tokens/colors/colors";

export type MarkDownProps = {
  children: string;
};

const MarkDown = ({
  children,
}: MarkDownProps) => (
  <ReactMarkdown
  css={{
    "img": {
      maxWidth: "60%",
      boxShadow: "5px 5px 5px rgba(0,0,0,.4)"
    },
    "a, a:visited": {
      color: toRGB("secondary"),
    }
  }}
  components={{
    code(props) {
      const {children, className, node, ...rest} = props
      const match = /language-(\w+)/.exec(className ?? '')
      return match ? (
        <SyntaxHighlighter
          {...rest}
          showLineNumbers
          children={String(children).replace(/\n$/, '')}
          style={dracula}
          language={match[1]}
          PreTag="div"
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      )
    }
  }}
  >
    {children}
  </ReactMarkdown>
);

export default MarkDown;