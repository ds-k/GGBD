import React, { useState } from "react";
import Drawer from "./Drawer";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-14 flex  w-full px-6 justify-between border-b border-gray-sub">
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl cursor-pointer"
        >
          햄버거
        </button>
        <div>로고</div>
      </div>
      <div className="flex items-center">
        <div>검색</div>
        <div>버튼</div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Nav;
