import { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";
import moment from "moment";
import MoreBtn from "../common/MoreBtn";
import MainBtn from "../common/MainBtn";

interface IProps {
  placeholder: string;
  reply: [
    {
      id: number;
      users_id: number;
      departments_id: number;
      reply: string;
      is_reported: number;
      is_blocked: boolean;
      createdAt: string;
      updatedAt: string;
      user: {
        id: number;
        nickname: string;
        img: string;
      };
    }
  ];
}

const Reply = ({ reply, placeholder }: IProps) => {
  const user = useRecoilValue(userState);
  const [value, setValue] = useState<string>("");

  return (
    <main>
      {reply.map((el) => {
        return (
          <li key={el.id} className="list-none flex justify-between my-12">
            {/* Img Section */}
            <section className="w-16 h-16 mt-1">
              <Image
                src={el.user.img}
                alt="profile"
                width={58}
                height={58}
                className="rounded-full"
              />
            </section>
            {/* Content Section */}
            <section className="ml-4 w-full">
              <span className="font-main font-bold text-lg text-blue-main">
                {el.user.nickname}
              </span>
              <span className="ml-2 font-main font-normal text-base text-gray-sub">
                {moment(el.createdAt).format("LL")}
              </span>
              <div className="font-main font-normal md:text-xl text-base text-black-main mt-1">
                {el.reply}
              </div>
            </section>
            {/* Edit Section */}
            <section className=" w-8">
              {user.id === el.user.id ? <MoreBtn /> : null}
            </section>
          </li>
        );
      })}
      {/* Input Section */}
      {user.isLogin ? (
        <section className="flex items-end mt-32 mb-16">
          <div className="w-full mr-4 ">
            <input
              className="outline-none w-full font-main text-black-main placeholder:text-gray-sub text-xl "
              type="text"
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* Line */}
            <div
              className={
                "mt-1 w-full border-1/2 border-b " +
                (value === "" ? "border-gray-sub" : "border-blue-main")
              }
            />
          </div>
          <MainBtn context="등록" />
        </section>
      ) : null}
    </main>
  );
};

export default Reply;
