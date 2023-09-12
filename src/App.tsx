import { Global } from "@emotion/react";
import { ReactNode } from "react";

export type AppProps = {
  children: ReactNode | ReactNode[];
};

const App = ({
  children,
}: AppProps) => (
  <div>
    <Global styles={{
      "*, *:before, *:after": {
        boxSizing: "border-box",
      }
    }} />
    {children}
  </div>
);

export default App;