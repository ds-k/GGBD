// import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import MainBtn from "../common/MainBtn";
import SubBtn from "../common/SubBtn";

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  dsecription: string;
  handleClick: () => void;
}

const CommonModal = ({
  setIsModalOpen,
  title,
  dsecription,
  handleClick,
}: IProps) => {
  return (
    <>
      {/* Modal Background */}
      <main
        className="fixed inset-0 z-20 w-screen h-screen cursor-pointer bg-gray-sub bg-opacity-25"
        onClick={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col items-center justify-center p-4 cursor-default z-30 md:w-96  w-80 my-auto mx-auto h-sm rounded-2xl inset-0 absolute bg-white shadow-xl">
          {/* Content Section */}
          <section className="flex flex-col items-center">
            <div className="mt-8 font-main font-bold text-xl text-black-main">
              {title}
            </div>
            <div className=" text-center mt-1 font-main font-normal text-base text-gray-main">
              {dsecription}
            </div>
          </section>
          {/* Button Section */}
          <section className="grid grid-cols-2 gap-2 mt-8">
            <MainBtn context={"확인"} handleClick={handleClick} />
            <SubBtn
              context={"취소"}
              handleClick={() => setIsModalOpen(false)}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default CommonModal;
