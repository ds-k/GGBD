import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-48 px-8 py-2 md:py-4 lg:py-8 flex justify-center w-screen bottom-0 bg-blue-main">
      <div className="flex flex-col lg:flex-row lg:w-lg md:w-md w-sm ">
        {/* logo section */}
        <section className="mt-1 flex lg:justify-center lg:items-center  lg:w-1/5 lg:border-r lg:border-white py-2">
          <Image
            src="/images/global/logo_white.svg"
            alt="logo_white"
            width={120}
            height={24}
            className="cursor-pointer"
          />
        </section>
        {/* contents section */}
        <section className="flex justify-around lg:w-4/5">
          {/* intro developer */}
          <div className="w-1/2 md:w-1/4 flex flex-col pt-2 md:pt-4 gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              개발자
            </span>
            <div className="flex items-end">
              <div className="text-sm font-normal font-sub text-white">
                김대성 |
              </div>
              <a
                href="https://github.com/daeseongkim05"
                className="flex mx-1 text-sm font-normal font-sub text-white hover:text-gray-sub"
              >
                {/* <Image
                  src="/images/global/github_Icon.svg"
                  alt="github_Icon"
                  width={17}
                  height={17}
                /> */}
                Github
              </a>
              {/* <div className="text-sm font-normal font-sub text-white">|</div> */}
              {/* <address className="w-1/2 text-sm font-normal font-sub text-white">
                <a href="tel:+821032012890" className="flex mx-1 not-italic">
                  <Image
                    src="/images/global/phone_Icon.svg"
                    alt="phone_Icon"
                    width={18}
                    height={18}
                  />
                </a>
              </address> */}
            </div>
            <div className="flex items-end">
              <div className="text-sm font-normal font-sub text-white">
                박소민 |
              </div>
              <a
                href="https://github.com/devsominpark"
                className="flex mx-1 text-sm font-normal font-sub text-white hover:text-gray-sub"
              >
                {/* <Image
                  src="/images/global/github_Icon.svg"
                  alt="github_Icon"
                  width={17}
                  height={17}
                /> */}
                Github
              </a>
              {/* <div className="text-sm font-normal font-sub text-white">|</div> */}
              {/* <address className="w-1/2 text-sm font-normal font-sub text-white">
                <a href="tel:+821040470710" className="flex mx-1 not-italic">
                  <Image
                    src="/images/global/phone_Icon.svg"
                    alt="phone_Icon"
                    width={18}
                    height={18}
                  />
                </a>
              </address> */}
            </div>
          </div>
          {/* intro source code */}
          <div className=" w-1/2 md:w-1/4 flex flex-col pt-2 md:pt-4 gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              소스 코드
            </span>
            <div className="flex">
              <div className="text-sm font-normal font-sub text-white">
                클라이언트 |
              </div>
              <a
                href="https://github.com/daeseongkim05/GGBD"
                className="text-sm mx-1 font-normal font-sub text-white hover:text-gray-sub"
              >
                Github
              </a>
            </div>
            <div className="flex">
              <div className="text-sm font-normal font-sub text-white">
                서버 |
              </div>
              <a
                href="https://github.com/daeseongkim05/GGBD-Server"
                className="text-sm mx-1 font-normal font-sub text-white hover:text-gray-sub"
              >
                Github
              </a>
            </div>
          </div>
          {/* contact */}
          <div className="hidden md:w-2/4 md:flex md:flex-col md:pt-4 md:gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              문의하기
            </span>
            <span className=" text-sm font-normal font-sub text-white">
              본 웹사이트에 대해 궁금한 사항이 있다면
              <br />
              아래 연락처로 문의해주세요.
            </span>
            <div className="flex">
              <address className="flex items-center align-middle text-sm font-normal font-sub text-white cursor-pointer hover:text-gray-sub">
                <Image
                  src="/images/global/mail_Icon.svg"
                  alt="mail_Icon"
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:ggbd.project@gmail.com"
                  className="ml-1 not-italic h-6"
                >
                  ggbd.project@gmail.com
                </a>
              </address>
            </div>
          </div>
        </section>
        {/* contact in sm-size */}
        <div className="flex items-center mt-4 md:hidden lg:hidden">
          <Image
            src="/images/global/mail_Icon.svg"
            alt="mail_Icon"
            width={24}
            height={24}
          />
          <address className="w-1/2 pl-1 text-sm font-normal font-sub text-white hover:text-gray-sub">
            <a href="mailto:ggbd.project@gmail.com" className="ml-1 not-italic">
              문의 메일 보내기
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
