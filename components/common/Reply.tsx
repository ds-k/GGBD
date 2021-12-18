import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";
import { useRouter } from "next/router";
import moment from "moment";
import MoreIcon from "../icon/MoreIcon";
import MainBtn from "../common/MainBtn";
import { ReplyType } from "../../types/reply";
import "moment/locale/ko";

interface IProps {
  placeholder: string;
  target: {
    id: string;
    name: string;
  };
  replies: ReplyType[];
}

const Reply = ({ target, replies, placeholder }: IProps) => {
  const router = useRouter();

  const user = useRecoilValue(userState);
  const [value, setValue] = useState<string>("");
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmitReply = async () => {
    if (value !== "") {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${target.name}/reply`,
        {
          target_id: target.id,
          users_id: user.id,
          reply: value,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (result) {
        setValue("");
        router.replace(router.asPath);
      }
    }
  };

  return (
    <main>
      {/* Input Section */}
      {user.isLogin ? (
        <section className="flex items-end mt-12 mb-16">
          <div className="w-full mr-4 ">
            <input
              className="outline-none w-full font-main text-black-main placeholder:text-gray-sub text-xl "
              type="text"
              placeholder={placeholder}
              value={value}
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
          <MainBtn context="등록" handleClick={() => handleSubmitReply()} />
        </section>
      ) : null}
      {replies.map((el) => {
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
              {user.id === el.user.id ? (
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
              ) : null}
            </section>
          </li>
        );
      })}
    </main>
  );
};

export default Reply;
