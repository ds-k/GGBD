import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";
import { useRouter } from "next/router";
import moment from "moment";
import MoreIcon from "../icon/MoreIcon";
import MainBtn from "../common/MainBtn";
import SubBtn from "../common/SubBtn";
import BackToTop from "../common/BackToTop";
import { ReplyType } from "../../types/reply";
import { NoData } from "../common/NoData";
import "moment/locale/ko";

interface IProps {
  placeholder: string;
  comment: string;
  description: string;
  target: {
    id: string;
    name: string;
  };
  replies: ReplyType[];
}

const Reply = ({
  target,
  replies,
  placeholder,
  comment,
  description,
}: IProps) => {
  const router = useRouter();

  const user = useRecoilValue(userState);
  const [value, setValue] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState({
    isEdit: false,
    reply: "",
  });

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

  const handleEditReply = async () => {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/${target.name}/reply/?id=${id}`,
      {
        reply: edit.reply,
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
      setEdit({ isEdit: false, reply: "" });
      router.replace(router.asPath);
    }
  };

  const handleDeleteReply = async () => {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/${target.name}/reply/?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (result) {
      router.replace(router.asPath);
    }
  };

  return (
    <main>
      {/* Input Section */}
      {user.isLogin ? (
        <section
          className="flex items-end mt-12 mb-16"
          onClick={() => setEdit({ isEdit: false, reply: "" })}
        >
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
      {replies.length === 0 ? (
        <NoData comment={comment} description={description} />
      ) : (
        <>
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
                <section className=" ml-4 w-full">
                  <span className="font-main font-bold text-lg text-blue-main">
                    {el.user.nickname}
                  </span>
                  <span className="ml-2 font-main font-normal text-base text-gray-sub">
                    {moment(el.createdAt).format("LL")}
                  </span>
                  <div className=" font-main font-normal md:text-xl text-base text-black-main mt-1">
                    {edit.isEdit && el.id === id ? (
                      <>
                        <input
                          className="w-full outline-none border-1/2 border-b border-blue-main pb-1"
                          type="text"
                          value={edit.reply}
                          onChange={(e) =>
                            setEdit({ isEdit: true, reply: e.target.value })
                          }
                          autoFocus
                        />
                        <div className="flex justify-end mt-4">
                          <div className="grid grid-cols-2 gap-2">
                            <MainBtn
                              context="수정"
                              handleClick={() => {
                                handleEditReply();
                              }}
                            />
                            <SubBtn
                              context="취소"
                              handleClick={() =>
                                setEdit({ isEdit: false, reply: "" })
                              }
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <span>{el.reply}</span>
                    )}
                  </div>
                </section>
                {/* Edit Section */}
                <section className="w-8">
                  {user.id === el.user.id ? (
                    <div>
                      {isOpen && el.id === id ? (
                        <div
                          className="fixed inset-0 w-screen h-screen cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        />
                      ) : null}
                      <section
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setId(el.id);
                        }}
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
                        {isOpen && el.id === id ? (
                          <section className="absolute flex mt-7 flex-col font-sub text-base w-24 mr-1 text-gray-sub bg-white border border-gray-sub">
                            <span
                              className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub border-b border-gray-sub"
                              onClick={() =>
                                setEdit({ isEdit: true, reply: el.reply })
                              }
                            >
                              수정
                            </span>
                            <span
                              className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub"
                              onClick={() => handleDeleteReply()}
                            >
                              삭제
                            </span>
                          </section>
                        ) : null}
                      </section>
                    </div>
                  ) : null}
                </section>
              </li>
            );
          })}
        </>
      )}
      {/* BackToTop Section */}
      <section className="flex justify-end mt-28">
        <BackToTop />
      </section>
    </main>
  );
};

export default Reply;