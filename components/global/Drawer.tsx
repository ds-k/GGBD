import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainBtn from "../../components/common/MainBtn";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 inset-0 transform " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <aside
        className={
          " w-screen max-w-xs md:max-w-sm lg:max-w-sm left-0 absolute bg-white h-full border-r border-gray-sub shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <section className="border-t border-b border-gray-sub h-52 mt-14 mx-6 mb-8 flex flex-col items-center justify-center">
          <div className="mt-1">
            <Image
              src="/images/global/guest_profile.svg"
              alt="guest_profile"
              width={55}
              height={55}
              className="cursor-pointer"
            />
          </div>
          <div className="font-main font-bold text-blue-main text-xl my-2">
            비회원님
          </div>
          <div className="font-sub font-normal text-sm text-gray-main mb-3">
            로그인 해 주세요.
          </div>
          <div>
            <MainBtn context={"시작하기"}></MainBtn>
          </div>
        </section>
        <section className="flex flex-col items-center gap-y-6">
          <Link href="/explore">
            <a
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main
            "
              onClick={() => setIsOpen(false)}
            >
              글 둘러보기
            </a>
          </Link>
          <Link href="/department">
            <a
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main"
              onClick={() => setIsOpen(false)}
            >
              진료과별 이야기
            </a>
          </Link>
          <Link href="/hospital">
            <a
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main"
            >
              상급종합병원 목록
            </a>
          </Link>
        </section>
      </aside>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
