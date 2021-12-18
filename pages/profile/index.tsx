// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../../components/global/HeadInfo";
import MainBtn from "../../components/common/MainBtn";
import SubBtn from "../../components/common/SubBtn";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";

const Profile = () => {
  const { id, nickname, description, img } = useRecoilValue(userState);

  return (
    <>
      <HeadInfo title={`${nickname}님의 프로필`} content={`${description}`} />
      <body className="flex justify-center md:p-8 p-4">
        <main className="flex justify-center lg:w-lg w-screen h-screen">
          <section className="flex mt-28 w-screen  h-44">
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
            <div className="flex flex-col justify-center ml-7 w-5/6">
              <section className="py-2 text-black-main font-main font-bold text-3xl border-b border-gray-sub">
                {nickname}
              </section>
              <section className="py-2 text-gray-main font-main text-xl">
                {description}
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
      </body>
    </>
  );
};

export default Profile;
