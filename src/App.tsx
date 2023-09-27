import { Global } from "@emotion/react";
import { ReactNode } from "react";
import colors from "./design-tokens/colors/colors";

export type AppProps = {
  children: ReactNode | ReactNode[];
};

const App = ({
  children,
}: AppProps) => (
  <>
    <Global styles={{
      ":root": {
        ...Object.fromEntries(
          Object.entries(colors).map(([name, rgb]) => {
            return [`--color-${name}`, `rgb(${rgb.join(",")})`];
          }),
        ),
      },
      "*, *:before, *:after": {
        boxSizing: "border-box",
      }
    }} />
    {children}
  </>
);

export default App;