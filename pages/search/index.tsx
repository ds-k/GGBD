import React, { useState, useEffect } from "react";
import HeadInfo from "../../components/global/HeadInfo";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import departmentData from "../../data/departmentData.json";

interface SearchResult {
  id: number;
  title: string;
  weather: string;
  slug: string;
  department: {
    name: string;
  };
}

const Search = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const getSearchResult = async (query: string) => {
    const searchRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/post/search/${query}?offset=0&limit=20`
    );
    setSearchResult(searchRes.data);
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^[가-힣a-zA-Z0-9]+$/;
    if (regEx.test(e.target.value)) {
      getSearchResult(e.target.value);
    }
    setQueryValue(e.target.value);
  };

  useEffect(() => {
    if (queryValue === "") {
      setIsListOpen(false);
    } else {
      setIsListOpen(true);
    }
  }, [queryValue]);

  return (
    <>
      <HeadInfo title={"검색하기"} content={"글을 검색할 수 있습니다."} />
      <div className="flex justify-center md:p-8 p-4">
        <main className="flex justify-center w-full lg:w-lg h-screen ">
          <section className="flex flex-col mt-28 w-full h-44">
            <section
              className={
                "flex items-center justify-between border-b " +
                (queryValue === "" ? "border-gray-sub" : "border-blue-main")
              }
            >
              <input
                type="text"
                className="w-11/12 h-10 font-main text-2xl text-gray-main outline-none"
                placeholder="검색어를 입력해주세요."
                onChange={handleQuery}
              />
              <Link href={`search/${queryValue}`}>
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
            {isListOpen ? (
              <section className="flex mt-4 ">
                <section className="w-full md:w-3/4 flex flex-col pr-4">
                  <div className="flex items-center">
                    <Image
                      src="/images/search/arrow.svg"
                      alt="search"
                      width={24}
                      height={24}
                    />
                    <span className=" text-lg text-gray-main ml-4 font-main">
                      글 검색
                    </span>
                  </div>
                  <article className="flex flex-col gap-y-4 h-96 overflow-auto mt-4">
                    {searchResult.length === 0 ? (
                      <div>
                        <span className="min-w-max ml-2 font-main text-gray-sub md:text-lg text-base">
                          데이터가 없습니다. 다른 키워드로 검색해보세요.
                        </span>
                      </div>
                    ) : (
                      searchResult.map((post) => {
                        return (
                          <Link
                            key={post.id}
                            href={`/post/detail/${post.slug}`}
                          >
                            <a>
                              <li className="list-none flex items-center ">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.replace(
                                      queryValue,
                                      `<b>${queryValue}</b>`
                                    ),
                                  }}
                                  className="prose ml-2 font-main text-xl text-gray-main hover:text-blue-main cursor-pointer truncate"
                                ></span>{" "}
                                <span className="min-w-max ml-2 font-main text-gray-sub text-sm">
                                  {post.department.name}
                                </span>
                                <span className=" min-w-max ml-2 font-main text-gray-sub text-sm">
                                  | {post.weather}
                                </span>
                              </li>
                            </a>
                          </Link>
                        );
                      })
                    )}
                  </article>
                </section>
                <section className="hidden md:flex md:flex-col w-1/4">
                  <div className="flex items-center">
                    <Image
                      src="/images/search/arrow.svg"
                      alt="search"
                      width={24}
                      height={24}
                    />
                    <span className=" text-lg text-gray-main ml-4 font-main">
                      진료과
                    </span>
                  </div>
                  <aside className="flex flex-col gap-y-2 mt-4 h-96 overflow-auto">
                    {departmentData.map((department) => {
                      return (
                        <Link
                          key={department.id}
                          href={`/explore/${department.name}?id=${department.id}&weather=전체&by=createdAt`}
                        >
                          <a>
                            <li className="list-none flex items-center ">
                              <span className="ml-2 font-main text-lg text-gray-sub hover:text-blue-main cursor-pointer truncate">
                                {department.name}
                              </span>
                            </li>
                          </a>
                        </Link>
                      );
                    })}
                  </aside>
                </section>
              </section>
            ) : null}
            {!isListOpen ? (
              <section className="flex flex-col">
                <div className="flex flex-col justify-center items-center mt-16">
                  <Image
                    src="/images/search/weatherIcon.svg"
                    alt="weatherIcon"
                    width={100}
                    height={20}
                  />
                  <div className="flex flex-col items-center mt-4">
                    <div className="font-main font-bold lg:text-2xl md:text-xl text-lg ">
                      <span className="text-black-main">읽고 싶은</span>
                      <span className="text-blue-main"> 주제</span>
                      <span className="text-black-main">를 검색해보세요.</span>
                    </div>
                    <div className="font-main font-normal lg:text-2xl md:text-xl text-lg  text-gray-main whitespace-nowrap">
                      관심있는 진료과에 관련된
                    </div>
                    <div className="font-main font-normal lg:text-2xl md:text-xl text-lg mb-10 text-gray-sub">
                      글을 둘러보실 수도 있습니다.
                    </div>
                  </div>
                  <Image
                    src="/images/search/searchIllust.svg"
                    alt="searchIllust"
                    width={190}
                    height={160}
                  />
                </div>
              </section>
            ) : null}
          </section>
        </main>
      </div>
    </>
  );
};

export default Search;
