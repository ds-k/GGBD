import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-main font-bold text-9xl">Home</div>
    </div>
  );
};

export default Home;
