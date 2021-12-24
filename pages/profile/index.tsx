// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../../components/global/HeadInfo";
import MainBtn from "../../components/common/MainBtn";
import SubBtn from "../../components/common/SubBtn";
import { useRecoilState } from "recoil";
import { userState } from "../../state/atom";
import { useState } from "react";

// import axios from "axios";

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);
  const { id, nickname, description, img } = user;
  const [isNameLabelOpen, setIsNameLabelOpen] = useState(false);
  const [isDescLabelOpen, setIsDescLabelOpen] = useState(false);
  console.log(setUser);
  // const handleEdit = async () => {
  //   const result = await axios.patch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/${target.name}/reply/?id=${id}`,
  //     {
  //       reply: edit.reply,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${user.accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     }
  //   );

  //   if (result) {
  //     setEdit({ isEdit: false, reply: "" });
  //     router.replace(router.asPath);
  //   }
  // };

  return (
    <>
      <HeadInfo title={`${nickname}님의 프로필`} content={`${description}`} />
      <div className="flex justify-center md:p-8 p-4">
        <main className="flex justify-center lg:w-lg w-screen h-screen">
          <section className="flex items-center flex-col lg:flex-row mt-28 w-screen  h-44">
            <div className="w-1/6">
              <section>
                <Image
                  src={img}
                  alt={nickname}
                  width={170}
                  height={170}
                  className=" rounded-full"
                />
              </section>
            </div>
            <div className="flex flex-col justify-center lg:ml-7 w-5/6">
              <section className="py-2 border-b border-gray-sub flex justify-between">
                {!isNameLabelOpen ? (
                  <span className="text-black-main font-main font-bold text-xl md:text-2xl lg:text-3xl ">
                    {nickname}
                  </span>
                ) : (
                  <div className="flex ">
                    <input
                      className="outline-none text-black-main font-main font-bold text-xl md:text-2xl lg:text-3xl"
                      type="text"
                      placeholder={nickname}
                      onChange={(e) => console.log(e.target.value)}
                      autoFocus
                    />
                    <MainBtn context="수정" handleClick={() => {}}></MainBtn>
                  </div>
                )}
                <span
                  className="font-main text-gray-main text-lg cursor-pointer"
                  onClick={() => setIsNameLabelOpen(!isNameLabelOpen)}
                >
                  수정
                </span>
              </section>
              <section className="py-2 flex justify-between">
                {!isDescLabelOpen ? (
                  <span className="text-gray-main font-main text-base md:text-lg lg:text-xl">
                    {description}
                  </span>
                ) : (
                  <div className="flex ">
                    <input
                      className="outline-none text-gray-main font-main text-base md:text-lg lg:text-xl"
                      type="text"
                      placeholder={description}
                      onChange={(e) => console.log(e.target.value)}
                      autoFocus
                    />
                    <MainBtn context="수정" handleClick={() => {}}></MainBtn>
                  </div>
                )}
                <span
                  className="font-main text-gray-main text-lg cursor-pointer"
                  onClick={() => setIsDescLabelOpen(!isDescLabelOpen)}
                >
                  수정
                </span>
              </section>
              <section className="flex gap-3 py-2">
                <Link href={`/record/post?id=${id}`}>
                  <a>
                    <MainBtn context={"나의 기록"} />
                  </a>
                </Link>
                <SubBtn context={"회원 탈퇴"} handleClick={() => {}} />
              </section>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
