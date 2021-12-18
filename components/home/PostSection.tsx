import Title from "../common/Title";
import Link from "next/link";
import PostCard from "../common/PostCard";
import { PostType } from "../../types/post";

interface IProps {
  byCreatedAtData: PostType[];
  byLikesData: PostType[];
}

const PostSection = ({ byCreatedAtData, byLikesData }: IProps) => {
  const renderCard = (data: PostType[]) => {
    return data.map((post: any, idx: number) => {
      return (
        <div
          key={post.id}
          className={
            idx === 3 ? "hidden lg:block" : idx === 2 ? "hidden md:block" : ""
          }
        >
          <Link href={`/post/detail/${post.slug}`}>
            <a>
              {/* card section */}
              <PostCard post={post} />
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <section>
      <section className="md:mt-12 mt-6">
        <Title
          title={"응원이 필요한 글"}
          firstSubTitle={"응원이 필요한 글들을 모았습니다."}
          secondSubTitle={"여러분의 사랑을 나눠주세요."}
        />
        <section className="mt-4 grid grid-cols-2 grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9">
          {renderCard(byLikesData)}
        </section>
      </section>
      <section className=" md:mt-12 mt-6">
        <Title
          title={"방금 올라온 글"}
          firstSubTitle={"가장 최근에 올라온 글을 모았습니다."}
          secondSubTitle={"댓글과 응원으로 마음을 보여주세요."}
        />
        <section className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9">
          {renderCard(byCreatedAtData)}
        </section>
      </section>
    </section>
  );
};

export default PostSection;
