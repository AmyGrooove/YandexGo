import { AppProps } from "next/app";
import { ReactElement } from "react";

import "@/theme/styles.scss";
import "@/theme/fonts.scss";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
