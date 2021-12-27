// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../../components/global/HeadInfo";
import MainBtn from "../../components/common/MainBtn";
import SubBtn from "../../components/common/SubBtn";
import CommonModal from "../../components/modal/CommonModal";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../../state/atom";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const { id, nickname, description, img } = user;
  const [isNameLabelOpen, setIsNameLabelOpen] = useState(false);
  const [isDescLabelOpen, setIsDescLabelOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clearUserState = useResetRecoilState(userState);

  type reqType = "nickname" | "description";

  const handleEdit = async (type: reqType, value: string) => {
    let reqBody = {};
    if (type === "nickname") {
      reqBody = {
        nickname: value,
      };
    } else {
      reqBody = {
        description: value,
      };
    }

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setUser({ ...user, ...res.data });
    setIsNameLabelOpen(false);
    setIsDescLabelOpen(false);
  };

  const Withdrawal = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  };
  return (
    <>
      {isModalOpen ? (
        <CommonModal
          setIsModalOpen={setIsModalOpen}
          title={"정말 탈퇴하시겠습니까?"}
          dsecription={"관련 글과 댓글이 모두 삭제됩니다."}
          handleClick={() => {
            Withdrawal();
            clearUserState();
            router.push("/");
          }}
        />
      ) : null}
      <HeadInfo title={`${nickname}님의 프로필`} content={`${description}`} />
      <div className="flex justify-center md:p-8 p-4">
        <main className="flex justify-center lg:w-lg w-screen h-screen">
          <section className="flex items-center flex-col lg:flex-row mt-28 w-screen  h-44">
            <div className="w-1/6">
              <section>
                {img === "guest" ? (
                  <Image
                    src="/images/global/guest_profile.svg"
                    alt="guest_profile"
                    width={170}
                    height={170}
                    className=" rounded-full"
                  />
                ) : (
                  <Image
                    src={img}
                    alt={nickname}
                    width={170}
                    height={170}
                    className=" rounded-full"
                  />
                )}
              </section>
            </div>
            <div className="flex flex-col justify-center lg:ml-7 w-5/6">
              <section className="py-2 border-b border-gray-sub flex justify-between">
                {!isNameLabelOpen ? (
                  <>
                    <span className="text-black-main font-main font-bold text-xl md:text-2xl lg:text-3xl ">
                      {nickname}
                    </span>
                    <span
                      className="font-main text-gray-main hidden md:block text-lg cursor-pointer"
                      onClick={() => setIsNameLabelOpen(true)}
                    >
                      수정
                    </span>
                  </>
                ) : (
                  <div className="flex w-full justify-between">
                    <input
                      className="outline-none text-black-main font-main font-bold text-xl md:text-2xl lg:text-3xl"
                      type="text"
                      placeholder={nickname}
                      onChange={(e) => setNameValue(e.target.value)}
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <MainBtn
                        context="수정"
                        handleClick={() => handleEdit("nickname", nameValue)}
                      />
                      <SubBtn
                        context="취소"
                        handleClick={() => setIsNameLabelOpen(false)}
                      />
                    </div>
                  </div>
                )}
              </section>
              <section className="mt-2 h-8 flex justify-between items-center">
                {!isDescLabelOpen ? (
                  <>
                    <span className="text-gray-main font-main text-base md:text-lg lg:text-xl">
                      {description}
                    </span>
                    <span
                      className="font-main text-gray-main hidden md:block text-lg cursor-pointer"
                      onClick={() => setIsDescLabelOpen(true)}
                    >
                      수정
                    </span>
                  </>
                ) : (
                  <div className="flex w-full items-center justify-between">
                    <input
                      className="outline-none text-gray-main font-main text-base md:text-lg lg:text-xl"
                      type="text"
                      placeholder={description}
                      onChange={(e) => setDescValue(e.target.value)}
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <MainBtn
                        context="수정"
                        handleClick={() => handleEdit("description", descValue)}
                      />
                      <SubBtn
                        context="취소"
                        handleClick={() => setIsDescLabelOpen(false)}
                      />
                    </div>
                  </div>
                )}
              </section>
              <section className="flex mt-2 gap-3 py-2">
                <Link href={`/record/post?id=${id}`}>
                  <a>
                    <MainBtn context={"나의 기록"} />
                  </a>
                </Link>
                <SubBtn
                  context={"회원 탈퇴"}
                  handleClick={() => setIsModalOpen(true)}
                />
              </section>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
