import HeadInfo from "../../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";

const Detail = ({ postData }: any) => {
  return (
    <>
      <div className="flex justify-center md:p-8 p-4">
        <div className="lg:w-lg w-screen">
          <HeadInfo title={"Detail"} content={""} />
          <h1>{postData.title}</h1>
          <h1>{postData.description}</h1>
          <h1>{postData.body}</h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/detail/${encodeURI(slug)}`
  );

  const postData = postRes.data;

  return { props: { postData } };
};

export default Detail;
