import { useState, useEffect, SetStateAction } from "react";
import HeadInfo from "../../components/global/HeadInfo";
import Image from "next/image";
import axios from "axios";
// import Link from "next/link";

const Search = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const [searchResult, setSearchResult] = useState([{ id: 0, title: "" }]);

  console.log(searchResult);
  const getSearchResult = async (q: SetStateAction<string>) => {
    const searchRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/post/search/${q}?offset=0&limit=6`
    );
    setSearchResult(searchRes.data);
  };

  const handleQuery = (e: { target: { value: SetStateAction<string> } }) => {
    if (e.target.value !== "") {
      getSearchResult(e.target.value);
    }
    setQueryValue(e.target.value);
  };
  console.log(queryValue);
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
        <main className="flex justify-center w-sm md:w-md lg:w-lg h-screen ">
          <section className="flex flex-col mt-28 w-full h-44">
            <section className="flex items-center justify-between border-b border-gray-sub pl-2">
              <input
                type="text"
                className="w-11/12 h-10 font-main text-2xl text-gray-main outline-none"
                placeholder="검색어를 입력해주세요."
                onChange={handleQuery}
              />
              <Image
                src="/images/global/search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </section>
            {isListOpen ? (
              <section className="flex mt-4 ">
                <section className="w-3/4 flex flex-col">
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
                  <article className="flex flex-col">
                    {searchResult.map((post) => {
                      return <li key={post.id}>{post.title}</li>;
                    })}
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
