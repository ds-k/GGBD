import { useState, useEffect, SetStateAction } from "react";
import HeadInfo from "../../components/global/HeadInfo";
import Image from "next/image";
// import Link from "next/link";

const Search = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const handleQuery = (e: { target: { value: SetStateAction<string> } }) => {
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
        <main className="flex justify-center lg:w-lg w-screen h-screen">
          <section className="flex flex-col mt-28 w-screen  h-44">
            <section className="flex items-center justify-between border-b border-gray-sub">
              <input
                type="text"
                className="w-11/12 h-10 font-main text-xl text-gray-main outline-none"
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
              <section>
                <section>제목들 리스트로</section>
                <section>weather섹션</section>
              </section>
            ) : null}
            <section className="flex flex-col">그림</section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Search;
