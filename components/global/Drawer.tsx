import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainBtn from "../common/MainBtn";
import SubBtn from "../common/SubBtn";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { userState, drawerState, loginModalState } from "../../state/atom";
import { socialLogOut } from "../common/Auth";

const Drawer = () => {
  const user = useRecoilValue(userState);
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(drawerState);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    useRecoilState(loginModalState);
  const clearUserState = useResetRecoilState(userState);

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
            {user.isLogin ? (
              <Link href="/profile">
                <a onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                  <Image
                    src={user.img}
                    alt={user.nickname}
                    width={55}
                    height={55}
                    className="cursor-pointer rounded-full"
                  />
                </a>
              </Link>
            ) : (
              <Image
                src="/images/global/guest_profile.svg"
                alt="guest_profile"
                width={55}
                height={55}
                className="cursor-pointer"
              />
            )}
          </div>
          {user.isLogin ? (
            <>
              <Link href="/profile">
                <a onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                  <div className="font-main font-bold text-blue-main text-xl my-2">
                    {user.nickname}
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                  <div className="font-sub font-normal text-sm text-gray-main mb-3">
                    {user.description}
                  </div>
                </a>
              </Link>
            </>
          ) : (
            <>
              <div className="font-main font-bold text-blue-main text-xl my-2">
                비회원님
              </div>
              <div className="font-sub font-normal text-sm text-gray-main mb-3">
                로그인 해주세요
              </div>
            </>
          )}

          <div>
            {user.isLogin ? (
              <div className="flex gap-3">
                <Link href="/post/create">
                  <a onClick={() => setIsDrawerOpen(false)}>
                    <SubBtn context={"글쓰기"} />
                  </a>
                </Link>
                <Link href="/">
                  <a
                    onClick={() => {
                      socialLogOut(user.accessToken);
                      clearUserState();
                    }}
                  >
                    <MainBtn context={"로그아웃"} />
                  </a>
                </Link>
              </div>
            ) : (
              <MainBtn
                context={"시작하기"}
                handleClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
              />
            )}
          </div>
        </section>
        <section className="flex flex-col items-center gap-y-6">
          <Link href="/explore/전체">
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
          <Link href="/hospital/전체">
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
