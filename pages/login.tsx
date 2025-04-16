import { useEffect } from "react";
import { initAnalytics } from "../firebase";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

