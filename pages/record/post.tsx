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

const Post = ({ postData }: IProps) => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"나의 기록 | 작성한 글"}
        content={"공감병동에서 작성한 글입니다."}
      />
      {/* Record Page */}
      <div className="flex justify-center md:p-8 p-4 mb-48">
        <main className="lg:w-lg w-screen">
          {/* Nav Section */}
          <NavSection tap={"작성한 글"} />
          {/* Post Section */}
          {postData.length === 0 ? (
            <NoData
              comment={"작성하신 글이 없습니다."}
              description={"현재의 감정과 생각을 기록해 보세요."}
            />
          ) : (
            <PostList postData={postData} />
          )}
        </main>
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const { id } = query;
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/record/post?id=${id}`
  );

  const data = getData.data;

  return {
    props: {
      postData: data,
    },
  };
};
