import axios from "axios";
import { GetServerSideProps } from "next";
import PostList from "../../components/post/PostList";
import HeadInfo from "../../components/global/HeadInfo";
import { NavSection } from "../../components/record/NavSection";
import { PostType } from "../../types/post";
import { NoData } from "../../components/common/NoData";

interface IProps {
  postData: PostType[];
}

const Scrap = ({ postData }: IProps) => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"나의 기록 | 스크랩한 글"}
        content={"공감병동에서 스크랩한 글입니다."}
      />
      {/* Record Page */}
      <div className="flex justify-center md:p-8 p-4 mb-48">
        <main className="lg:w-lg w-screen">
          {/* Nav Section */}
          <NavSection tap={"스크랩한 글"} />
          {/* Post Section */}
          {postData.length === 0 ? (
            <NoData
              comment={"스크랩한 글이 없습니다."}
              description={"힘이 되는 글을 발견했다면 스크랩해보세요."}
            />
          ) : (
            <PostList postData={postData} />
          )}
        </main>
      </div>
    </>
  );
};

export default Scrap;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const { id } = query;
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/record/scrap?id=${id}`
  );

  const data = getData.data;

  return {
    props: {
      postData: data,
    },
  };
};
