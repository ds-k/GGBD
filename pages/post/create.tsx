import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import WeatherBtn from "../../components/common/WeatherBtn";

const Create = () => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"글쓰기"}
        content={"오늘의 감정과 생각을 자유롭게 기록해보세요."}
      />
      {/* CreatePost Page */}
      {/* Img Container */}
      <section className="flex flex-col justify-center items-center w-screen h-72 bg-gray-100">
        <div className="font-main font-nomal text-2xl text-gray-main">
          내 감정의 날씨는?
        </div>
        <div className="my-3 font-main font-nomal text-sm text-gray-main">
          선택하신 감정과 어울리는 대표 사진이 선정됩니다.
        </div>
        {/* 날씨 선택 */}
        <WeatherBtn />
      </section>
      {/* Contents */}
      <div className="flex justify-center md:p-8 p-4">
        <div className="lg:w-lg w-screen">
          {/* Top Section */}
          <section className="flex flex-row justify-between mb-8">
            {/* 진료과 선택 */}
            <div className="flex cursor-pointer">
              <div className="mr-1 font-main font-nomal text-lg text-gray-main">
                진료받고 계신 과는 어딘가요?
              </div>
              <Image
                src="/images/global/dropBox_Icon.svg"
                alt="dropBox_Icon"
                width={20}
                height={20}
              />
            </div>
            {/* 토글 */}
            <div className="flex">
              <div className="mr-1 font-main font-nomal text-lg text-gray-main">
                글 공개 여부
              </div>
              <div className="mr-1 font-main font-nomal text-lg text-gray-main">
                댓글 활성화 여부
              </div>
            </div>
          </section>
          {/* Middle Section */}
          <section>
            <input
              className="min-w-full mb-4 font-main font-nomal text-3xl text-gray-main outline-none"
              placeholder="글의 제목을 입력해 주세요."
            ></input>
            <input
              className="min-w-full mb-4 font-main font-nomal text-xl text-gray-main outline-none"
              placeholder="글의 내용을 간략하게 설명해 주세요."
            ></input>
            <div className="min-w-full border-1/2 border-b border-gray-sub" />
            <input
              className="min-w-full mt-8 font-main font-nomal text-xl text-gray-main outline-none"
              placeholder="남기고 싶은 기록을 자유롭게 적어주세요."
            ></input>
          </section>
        </div>
      </div>
    </>
  );
};

export default Create;
