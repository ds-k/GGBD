import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center p-8">
      {/* container */}
      <div className="lg:w-lg md:w-md w-sm">
        {/*Intro*/}
        <section className="flex lg:justify-end md:justify-end justify-center">
          {/* Context */}
          <header className="flex flex-col items-center lg:items-baseline md:items-baseline mt-16 z-10 lg:min-w-full md:min-w-full">
            <div className="font-main font-bold lg:text-4xl md:text-3xl text-lg lg:mb-3 md:mb-2">
              <span>슬픔을 나누는 병동, </span>
              <span className="text-blue-main">공감병동</span>
              <span>입니다.</span>
            </div>
            <div className="font-main font-normal lg:text-4xl md:text-3xl text-lg lg:mb-3 md:mb-2 text-gray-main whitespace-nowrap">
              하루하루의 감정과 생각을 기록해보세요.
            </div>
            <div className="font-main font-normal lg:text-4xl md:text-3xl text-lg lg:mb-3 md:mb-2 text-gray-sub">
              많은 사람들이 응원해 줄거에요.
            </div>
          </header>
          {/* Img */}
          <div className="lg:mt-32 md:mt-40 mt-44 z-0 absolute">
            <img
              src="./images/home/intro.svg"
              alt="intro"
              className="lg:max-w-lg md:max-w-md max-w-xs"
            />
          </div>
        </section>
        {/*Intro*/}
        <section className="mt-72">
          <header className="font-main font-bold">응원이 필요한 글</header>
          <hgroup>
            <span>응원이 필요한 글들을 모았습니다.</span>
            <span>여러분의 사랑을 나눠주세요.</span>
          </hgroup>
        </section>
      </div>
    </div>
  );
};

export default Home;
