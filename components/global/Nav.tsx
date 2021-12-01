import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import MainBtn from "../common/MainBtn";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-14 flex  w-full px-6 justify-between border-b border-gray-sub">
      <div className="flex items-center">
        <Image
          src="/images/global/drawer.svg"
          alt="intro"
          width={24}
          height={18}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />
        <Link href="/">
          <a className="flex items-center ml-4 lg:hidden">
            <Image
              src="/images/global/logo_sm.svg"
              alt="logo_sm"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <Link href="/">
          <a className="lg:flex lg:items-center lg:ml-4 hidden ">
            <Image
              src="/images/global/logo_lg.svg"
              alt="logo_lg"
              width={120}
              height={24}
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/search">
          <a className="flex items-center mr-3 ">
            <Image
              src="/images/global/search.svg"
              alt="search"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <MainBtn context={"시작하기"} />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Nav;
