import { useState } from "react";
import MoreIcon from "../icon/MoreIcon";

const MoreBtn = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen ? (
        <div
          className="fixed inset-0 w-screen h-screen cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
      <section
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-end"
      >
        <div
          onMouseDown={() => {
            setIsClick(true);
          }}
          onMouseUp={() => setIsClick(false)}
        >
          <MoreIcon color={isClick ? "#0984C0" : "#AAA7B0"} />
        </div>
        {isOpen ? (
          <section className="absolute flex mt-7 flex-col font-sub text-base w-24 mr-1 text-gray-sub bg-white border border-gray-sub">
            <span className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub border-b border-gray-sub">
              수정
            </span>
            <span className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub">
              삭제
            </span>
          </section>
        ) : null}
      </section>
    </>
  );
};

export default MoreBtn;
