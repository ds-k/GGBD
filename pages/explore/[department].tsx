// import { useState } from "react";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import { useWeather } from "../../hooks/useWeather";
import Carousel from "../../components/explore/Carousel";

const Explore = ({ postData }: any) => {
  const router = useRouter();
  const { department, id } = router.query;
  const [weather, renderWeathers] = useWeather(["전체", "맑음", "구름", "비"]);

  useEffect(() => {
    router.push(`/explore/${department}?id=${id}&weather=${weather}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

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
          <body className="flex flex-col content-center">
            <section>
              {/* title section */}
              <Title
                title={"글 둘러보기"}
                firstSubTitle={
                  "관련 글을 읽고 싶은 진료과를 선택할 수 있습니다."
                }
              />
              {/* carousel section */}
              <Carousel weather={weather} />
            </section>
            <section className="flex justify-center items-center my-10">
              <p className=" text-3xl text-black-main font-main font-bold">
                {department === "모든-글" ? "모든 글" : department}
              </p>
            </section>
            <section className="mb-48">
              {/* options section */}
              <section className="flex justify-between">
                {/* dropbox */}
                <div className="flex items-center">
                  <Image
                    src="/images/explore/downArrow.svg"
                    alt="downArrow"
                    width={24}
                    height={24}
                  ></Image>
                  <select className="ml-2 cursor-pointer appearance-none font-main font-nomal lg:text-xl text-lg text-gray-main outline-none ">
                    <option>최신 순</option>
                    <option>응원이 필요한 순</option>
                  </select>
                </div>
                <div>{renderWeathers()}</div>
              </section>
              {/* post list section */}
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9 mt-8">
                {postData.length === 0 ? (
                  <div>데이터가 없습니다.</div>
                ) : (
                  postData.map((post: any) => {
                    return (
                      <Link key={post.id} href={`/post/detail/${post.slug}`}>
                        <a>
                          {/* card section */}
                          <div className="">
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              width={249}
                              height={200}
                            ></Image>
                            <div className="flex items-center gap-3 my-1">
                              <div className="flex items-center gap-1">
                                <Image
                                  src={`/images/explore/like.svg`}
                                  alt="likes"
                                  width={16}
                                  height={16}
                                />
                                <span className=" text-sm font-main text-black-main">
                                  {post.likes}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Image
                                  src={`/images/explore/scrap.svg`}
                                  alt="scraps"
                                  width={16}
                                  height={16}
                                />
                                <span className=" text-sm font-main text-black-main">
                                  {post.scraps}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-start  text-black-main font-main font-bold text-lg truncate">
                              <Image
                                src={`/images/explore/${post.weather}.svg`}
                                alt={post.weather}
                                width={16}
                                height={16}
                              ></Image>
                              <span>{post.title}</span>
                            </div>
                            <div className="mt-1 text-gray-sub font-sub text-sm  line-clamp-2">
                              {post.description}
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                  })
                )}
              </section>
            </section>
          </body>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { department, weather, id, by } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${encodeURI(
      department
    )}?id=${id}&offset=0&limit=16&weather=${encodeURI(weather)}&by=${by}`
  );

  const postData = postRes.data;

  return { props: { postData } };
};

export default Explore;
