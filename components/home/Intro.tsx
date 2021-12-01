import Image from "next/image";
const Intro = () => {
  return (
    <>
      {/*Intro Section*/}
      <section className="flex lg:justify-end md:justify-end justify-center">
        {/* Context */}
        <header className="flex flex-col items-center lg:items-baseline md:items-baseline lg:mt-16 md:mt-16 mt-8 z-10 lg:min-w-full md:min-w-full">
          <div className="font-main font-bold lg:text-4xl md:text-2xl text-lg lg:mb-2">
            <span className="text-black-main">슬픔을 나누는 병동, </span>
            <span className="text-blue-main">공감병동</span>
            <span className="text-black-main">입니다.</span>
          </div>
          <div className="font-main font-normal lg:text-4xl md:text-2xl text-lg lg:mb-2 text-gray-main whitespace-nowrap">
            하루하루의 감정과 생각을 기록해보세요.
          </div>
          <div className="font-main font-normal lg:text-4xl md:text-2xl text-lg lg:mb-60 md:mb-56 mb-48 text-gray-sub">
            많은 사람들이 응원해 줄거에요.
          </div>
        </header>
        {/* Img */}
        <div className="lg:max-w-lg md:max-w-md max-w-xs lg:mt-32 md:mt-32 mt-36 z-0 absolute">
          <Image
            src="/images/home/intro.svg"
            alt="intro"
            width={531}
            height={308}
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
