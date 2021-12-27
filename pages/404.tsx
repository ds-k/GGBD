import Image from "next/image";

export default function Error404() {
  return (
    <div className="flex justify-center items-center md:p-8 p-4">
      <div className="lg:w-lg w-screen">
        <section className="flex flex-col justify-center items-center mt-28">
          <Image
            src="/images/global/404.svg"
            alt="404"
            width={421}
            height={391}
          />
          <header className="font-main font-bold text-gray-main md:text-2xl text-xl mt-12">
            페이지를 찾을 수 없습니다.
          </header>
          <hgroup className="font-main font-normal text-gray-sub md:text-xl text-lg md:mt-1">
            사이트 관리자에게 문의해 주세요.
          </hgroup>
        </section>
      </div>
    </div>
  );
}
