import "tailwindcss/tailwind.css";
import "/quill.custom.css";
import type { AppProps } from "next/app";
import Layout from "../components/global/Layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
