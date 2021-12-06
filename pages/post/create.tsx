import { useState } from "react";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import WeatherBtn from "../../components/common/WeatherBtn";
import MainBtn from "../../components/common/MainBtn";
import SubBtn from "../../components/common/SubBtn";
import Toggle from "../../components/common/Toggle";
import ChangePhoto from "../../components/icon/ChangePhoto";

const Create = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [weather, setWeather] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"글쓰기"}
        content={"오늘의 감정과 생각을 자유롭게 기록해보세요."}
      />
      {/* CreatePost Page */}
      <section className="flex flex-col justify-center items-center w-screen h-72 bg-gray-100">
        {/* Img Container */}
        {weather === "" ? (
          <>
            <div className="font-main font-nomal text-2xl text-gray-main">
              내 감정의 날씨는?
            </div>
            <div className="my-3 font-main font-nomal text-sm text-gray-main">
              선택하신 감정과 어울리는 대표 사진이 선정됩니다.
            </div>
          </>
        ) : (
          <div
            className="mb-8"
            onMouseDown={() => setIsClick(true)}
            onMouseUp={() => setIsClick(false)}
          >
            <ChangePhoto color={isClick ? "#0984C0" : "#AAA7B0"} />
          </div>
        )}
        {/* 날씨 선택 */}
        <div className="w-screen flex justify-center">
          <div className="grid grid-cols-3 gap-2">
            <WeatherBtn
              context={"맑음"}
              weather={weather}
              handleClick={() => setWeather("맑음")}
            />
            <WeatherBtn
              context={"구름"}
              weather={weather}
              handleClick={() => setWeather("구름")}
            />
            <WeatherBtn
              context={"비"}
              weather={weather}
              handleClick={() => setWeather("비")}
            />
          </div>
        </div>
      </section>
      {/* Middle Container */}
      <div className="flex justify-center">
        <div className="lg:w-lg w-screen p-4">
          <section className="flex md:flex-row flex-col-reverse justify-between md:mb-8 mb-6">
            {/* Choose Departments */}
            <div className="flex md:mt-5 cursor-pointer">
              <div className="mr-2 font-main font-nomal lg:text-xl text-lg text-gray-main">
                진료받고 계신 과는 어딘가요?
              </div>
              <Image
                src="/images/common/dropBox_Icon.svg"
                alt="dropBox_Icon"
                width={20}
                height={20}
              />
            </div>
            {/* Toggle */}
            <div className="flex md:mb-0 mt-4 mb-8 items-center justify-end">
              <div className="mr-2 font-main font-nomal lg:text-lg text-base text-gray-main">
                글 공개 여부
              </div>
              <Toggle
                isClick={isPublic}
                handleClick={() => setIsPublic(!isPublic)}
              />
              <div className="lg:ml-6 ml-4 mx-2 font-main font-nomal lg:text-lg text-base text-gray-main">
                댓글 활성화 여부
              </div>
              <Toggle
                isClick={isActive}
                handleClick={() => setIsActive(!isActive)}
              />
            </div>
          </section>
          {/* Title Input */}
          <section>
            <input
              type="text"
              maxLength={36}
              className="w-full md:mb-4 mb-2 font-main font-nomal md:text-3xl text-2xl placeholder-gray-sub text-gray-main outline-none"
              placeholder="글의 제목을 입력해 주세요."
            ></input>
            <input
              type="text"
              maxLength={54}
              className="w-full mb-4 font-main font-nomal md:text-xl text-lg placeholder-gray-sub text-gray-main outline-none"
              placeholder="글의 내용을 간략하게 설명해 주세요."
            ></input>
          </section>
        </div>
      </div>
      {/* Line */}
      <div className="w-full border-1/2 border-b border-gray-sub" />
      {/* Buttom Container */}
      <div className="flex justify-center">
        <div className="lg:w-lg w-screen p-4">
          {/* Quil Editor */}
          <div className="h-64 mt-4 font-main font-nomal md:text-xl text-lg text-gray-sub">
            남기고 싶은 기록을 자유롭게 적어주세요.
          </div>
          <div className="flex justify-center">
            <div className="my-8 grid grid-cols-2 gap-2">
              <MainBtn context={"등록"} />
              <SubBtn context={"취소"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
