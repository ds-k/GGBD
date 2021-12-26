import { useState } from "react";
import ArrowUp from "../icon/ArrowUp";

const SubBtn = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div>
      <button
        className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm active:border-blue-sub active:text-blue-sub"
        onClick={() => scrollHandler()}
        onMouseDown={() => setIsClick(true)}
        onMouseUp={() => setIsClick(false)}
      >
        <ArrowUp color={isClick ? "#60BDD1" : "#0984C0"} />
        <span>맨 위로</span>
      </button>
    </div>
  );
};

export default SubBtn;
