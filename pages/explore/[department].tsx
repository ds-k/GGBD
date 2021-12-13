import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import { useWeather } from "../../hooks/useWeather";

const Explore = ({ departmentData, postData }: any) => {
  const router = useRouter();
  const { department } = router.query;
  const [weather, renderWeathers] = useWeather(["전체", "맑음", "구름", "비"]);
  const [currentCenter, setCurrentCenter] = useState(2);
  console.log(weather);
  const allDepartmentData = departmentData.splice(2, 0, {
    id: 0,
    name: "모든 글",
  });
  console.log(allDepartmentData);

  return (
    <>
      <HeadInfo
        title={
          department !== "전체" ? `글 둘러보기 - ${department}` : "글 둘러보기"
        }
        content={`${department}`}
      />
      {/* explore page */}
      <div className="flex justify-center md:p-8 p-4">
        <div className="lg:w-lg w-screen">
          <body className="flex flex-col content-center h-screen">
            <section>
              {/* title section */}
              <Title
                title={"글 둘러보기"}
                firstSubTitle={
                  "관련 글을 읽고 싶은 진료과를 선택할 수 있습니다."
                }
              />
              {/* carousel section */}
              <section className="flex justify-between">
                <button>왼쪽으루</button>
                <div className="flex justify-between">
                  <Link href={`/explore/모든 글`}>
                    <a>
                      <h1>모든 글 보기</h1>
                    </a>
                  </Link>
                  {departmentData.map((department: any, idx: number) => {
                    return (
                      <div
                        key={department.id}
                        className={
                          currentCenter - 2 <= idx && currentCenter + 2 >= idx
                            ? ""
                            : "hidden"
                        }
                      >
                        <Link
                          href={`/explore/${department.name.replace(
                            " ",
                            "-"
                          )}-${department.id}`}
                        >
                          <a>
                            <h1>{department.name}</h1>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <button onClick={() => setCurrentCenter(currentCenter + 1)}>
                  오른쪽으루
                </button>
              </section>
            </section>
            <section>
              {/* options section */}
              <section className="flex justify-between">
                {/* dropbox */}
                <div>드롭박스</div>
                <div>{renderWeathers()}</div>
              </section>
              {/* post list section */}
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {postData.map((post: any) => {
                  return (
                    <Link
                      key={post.id}
                      href={`/post/detail/${post.slug}`} // ! [slug].tsx로 바꿀 예정
                    >
                      <a>
                        {/* card section */}
                        <div>
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            width={249}
                            height={200}
                          ></Image>
                          <div className="text-black-main font-main font-bold text-lg truncate">
                            {post.title}
                          </div>
                          <div className="text-gray-sub font-sub text-sm  line-clamp-2">
                            {post.description}
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </section>
            </section>
          </body>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { department } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${encodeURI(
      department
    )}?offset=0&limit=8`
  );
  const departmentRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const departmentData = departmentRes.data;
  const postData = postRes.data;

  return { props: { departmentData, postData } };
};

export default Explore;
