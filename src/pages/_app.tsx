import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";

import GlobalStyles from "../styles/global";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
