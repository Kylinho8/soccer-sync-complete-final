import { useEffect } from "react";
import { initAnalytics } from "../firebase"; // adjust path if needed

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
