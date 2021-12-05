import Head from "next/head";

interface IProps {
  title: string;
  content: string;
}

const HeadInfo = ({ title, content }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
    </>
  );
};

HeadInfo.defaultProps = {
  title: process.env.NEXT_PUBLIC_TITLE,
  content:
    "슬픔을 나누는 병동, 공감병동입니다. 하루하루의 감정과 생각을 자유롭게 기록해보세요. 많은 사람들이 응원해 줄거에요.",
};

export default HeadInfo;
