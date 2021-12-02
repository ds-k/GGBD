import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-48  py-2 md:py-4 lg:py-8 flex justify-center w-screen bottom-0 bg-blue-main">
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
        <section className="flex justify-around  lg:w-4/5">
          {/* intro developer */}
          <div className="w-1/2 md:w-1/4 flex flex-col pt-2 md:pt-4 gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              개발자
            </span>
            <a
              href="https://github.com/daeseongkim05"
              className=" text-sm font-normal font-sub text-white hover:text-gray-sub"
            >
              김대성 | Github
            </a>
            <a
              href="https://github.com/devsominpark"
              className=" text-sm font-normal font-sub text-white hover:text-gray-sub"
            >
              박소민 | Github
            </a>
          </div>
          {/* intro source code */}
          <div className=" w-1/2 md:w-1/4 flex flex-col pt-2 md:pt-4 gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              소스 코드
            </span>
            <a
              href="https://github.com/daeseongkim05/GGBD"
              className=" text-sm font-normal font-sub text-white hover:text-gray-sub"
            >
              클라이언트 | Github
            </a>
            <a
              href="https://github.com/daeseongkim05/GGBD-Server"
              className=" text-sm font-normal font-sub text-white hover:text-gray-sub"
            >
              서버 | Github
            </a>
          </div>
          {/* contact */}
          <div className="hidden md:w-2/4 md:flex md:flex-col md:pt-4 md:gap-y-2 lg:pl-8 ">
            <span className=" text-sm font-bold font-sub text-white">
              문의하기
            </span>
            <span className=" text-sm font-normal font-sub text-white">
              본 웹사이트에 대해 궁금한 사항이나,
              <br /> 잘못된 정보를 발견하시면 아래 연락처로 문의해주세요.
            </span>
            <div className="flex ">
              <address className="flex items-center text-sm font-normal font-sub text-white cursor-pointer hover:text-gray-sub">
                <Image
                  src="/images/global/mail_Icon.svg"
                  alt="mail_Icon"
                  width={24}
                  height={24}
                />
                <a
                  href="mailto:ggbd.project@gmail.com"
                  className="ml-1 not-italic"
                >
                  ggbd.project@gmail.com
                </a>
              </address>
              <address className="ml-2 flex items-center text-sm font-normal font-sub text-white cursor-pointer hover:text-gray-sub">
                <Image
                  src="/images/global/phone_Icon.svg"
                  alt="phone_Icon"
                  width={24}
                  height={24}
                />
                <a href="tel:+821032012890" className="ml-1 not-italic">
                  010-3201-2890
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
          <address className="w-1/2 pl-1 text-sm font-normal font-sub text-white">
            <a href="mailto:ggbd.project@gmail.com" className="ml-1 not-italic">
              메일 보내기
            </a>
          </address>
          <Image
            src="/images/global/phone_Icon.svg"
            alt="phone_Icon"
            width={24}
            height={24}
          />
          <address className="w-1/2 text-sm font-normal font-sub text-white">
            <a href="tel:+821032012890" className="ml-1 not-italic">
              전화 걸기
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
