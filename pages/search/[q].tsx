import HeadInfo from "../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";
import PostList from "../../components/post/PostList";
import { PostType } from "../../types/post";
import BackToTop from "../../components/common/BackToTop";
import Image from "next/image";
import Link from "next/link";
import { NoData } from "../../components/common/NoData";
import { useRouter } from "next/router";
import { useState } from "react";

interface IProps {
  postData: PostType[];
}

const SearchByQuery = ({ postData }: IProps) => {
  const router = useRouter();
  const { q } = router.query;
  const [queryValue, setQueryValue] = useState(q);

  return (
    <>
      <HeadInfo title={"검색하기"} content={"글을 검색할 수 있습니다."} />
      <div className="flex justify-center md:p-8 p-4">
        <main className="flex flex-col justify-center w-full lg:w-lg ">
          <section className="flex items-center mt-14 justify-between border-b border-gray-sub ">
            <input
              type="text"
              className="w-11/12 h-10 font-main text-2xl text-gray-main outline-none"
              placeholder="검색어를 입력해주세요."
              value={queryValue}
              onChange={(e) => setQueryValue(e.target.value)}
            />
            <Link href={`/search/${queryValue}`}>
              <a>
                <Image
                  src="/images/global/search.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </section>
          {postData.length === 0 ? (
            <div>
              <NoData
                comment="찾으시는 게시글이 없습니다."
                description="다른 키워드로 검색해보세요."
              />
            </div>
          ) : (
            <PostList postData={postData} />
          )}

          <section className="flex justify-end mt-20">
            <BackToTop />
          </section>
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const { q } = query;

  const searchRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/search/${encodeURI(
      q
    )}?offset=0&limit=24`
  );
  const postData = searchRes.data;

  return { props: { postData } };
};

export default SearchByQuery;
