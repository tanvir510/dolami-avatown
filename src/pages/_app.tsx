import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/sass/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
