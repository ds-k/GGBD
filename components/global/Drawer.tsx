import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainBtn from "../../components/common/MainBtn";
import SubBtn from "../common/SubBtn";

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const Drawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  isLoginModalOpen,
  setIsLoginModalOpen,
  isLogin,
}: IProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 inset-0 transform " +
        (isDrawerOpen
          ? " transition-opacity opacity-100 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <aside
        className={
          " w-screen max-w-xs md:max-w-sm left-0 absolute bg-white h-full border-r border-gray-sub shadow-xl duration-500 transition-all transform " +
          (isDrawerOpen ? " -translate-x-0 " : " -translate-x-full ")
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
            {!isLogin ? (
              <MainBtn
                context={"시작하기"}
                handleClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
              />
            ) : (
              <Link href="/post/create">
                <a onClick={() => setIsDrawerOpen(false)}>
                  <SubBtn context={"글쓰기"} />
                </a>
              </Link>
            )}
          </div>
        </section>
        <section className="flex flex-col items-center gap-y-6">
          <Link href="/explore">
            <a
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main
            "
              onClick={() => setIsDrawerOpen(false)}
            >
              글 둘러보기
            </a>
          </Link>
          <Link href="/department">
            <a
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main"
              onClick={() => setIsDrawerOpen(false)}
            >
              진료과별 이야기
            </a>
          </Link>
          <Link href="/hospital">
            <a
              onClick={() => setIsDrawerOpen(false)}
              className="text-xl text-gray-main font-main font-normal hover:font-bold hover:text-blue-main"
            >
              상급종합병원 목록
            </a>
          </Link>
        </section>
      </aside>
      <section
        className=" w-screen h-full  cursor-pointer "
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
