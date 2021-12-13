import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import { useWeather } from "../../hooks/useWeather";
import departmentData from "../../data/departmentData.json";

const Explore = ({ postData }: any) => {
  const router = useRouter();
  const { department } = router.query;
  const [weather, renderWeathers] = useWeather(["전체", "맑음", "구름", "비"]);
  const [currentCenter, setCurrentCenter] = useState(0);
  console.log(`weather`, weather);

  return (
    <>
      <HeadInfo
        title={
          department === "모든-글"
            ? "글 둘러보기 | 모든 글"
            : `글 둘러보기 | ${department}`
        }
        content={`${department}`}
      />
      {/* explore page */}
      <div className="flex justify-center md:p-8 p-4">
        <div className="lg:w-lg w-screen">
          <body className="flex flex-col content-center mb-48">
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
                <button
                  onClick={() => {
                    if (currentCenter === 0) return null;
                    setCurrentCenter(currentCenter - 1);
                  }}
                  className="w-1/12"
                >
                  왼
                </button>

                <div className="grid grid-cols-5 gap-5 w-10/12 mt-4">
                  {departmentData.map((department: any, idx: number) => {
                    return (
                      <li
                        key={department.id}
                        className={
                          currentCenter <= idx && currentCenter + 4 >= idx
                            ? "flex justify-center items-center lg:h-16 md:h-16 h-14 border text-gray-main hover:text-blue-main border-gray-sub hover:border-blue-main cursor-pointer active:border-blue-sub active:text-blue-sub"
                            : "hidden"
                        }
                      >
                        <Link
                          href={`/explore/${department.name.replace(
                            " ",
                            "-"
                          )}?id=${department.id}`}
                        >
                          <a>
                            <h1>{department.name}</h1>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>

                <button
                  onClick={() => {
                    if (currentCenter === 36) return null;
                    setCurrentCenter(currentCenter + 1);
                  }}
                  className="w-1/12"
                >
                  오
                </button>
              </section>
            </section>
            <section>
              {/* options section */}
              <section className="flex justify-between mt-4">
                {/* dropbox */}
                <div>드롭박스</div>
                <div>{renderWeathers()}</div>
              </section>
              {/* post list section */}
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                {postData.map((post: any) => {
                  return (
                    <Link
                      key={post.id}
                      href={`/post/detail/${post.slug}`} // ! [slug].tsx로 바꿀 예정
                    >
                      <a>
                        {/* card section */}
                        <div className="">
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
  const { department, weather, id } = context.query;
  console.log(weather);

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${encodeURI(
      department
    )}?id=${id}&offset=0&limit=16`
  );
  const departmentRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const departmentData = departmentRes.data;
  const postData = postRes.data;

  return { props: { departmentData, postData } };
};

export default Explore;
