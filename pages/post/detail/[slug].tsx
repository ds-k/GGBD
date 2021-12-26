import HeadInfo from "../../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "../../../state/atom";
import moment from "moment";
import "moment/locale/ko";
import { PostType } from "../../../types/post";
import Reply from "../../../components/reply/Reply";
import CommonModal from "../../../components/modal/CommonModal";
import EditSection from "../../../components/detail/EditSection";
import ToggleSection from "../../../components/detail/ToggleSection";

interface IProps {
  postData: PostType;
}

const Detail = ({ postData }: IProps) => {
  const router = useRouter();

  const [user] = useRecoilState(userState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDeletePost = async () => {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/post/?id=${postData.id}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (result) {
      router.back();
    }
  };

  return (
    <>
      {/* headInfo */}
      <HeadInfo title={postData.title} content={postData.description} />
      <div className="flex justify-center items-center w-screen">
        <Image
          className="object-cover"
          src={postData.thumbnail}
          alt={postData.title}
          width={1920}
          height={288}
          layout="fixed"
        />
      </div>
      {isModalOpen ? (
        <CommonModal
          setIsModalOpen={setIsModalOpen}
          title={"정말 삭제하시겠습니까?"}
          dsecription={"한번 삭제한 글은 복구가 불가능합니다."}
          handleClick={handleDeletePost}
        />
      ) : null}
      <div className="flex justify-center">
        <main className="lg:w-lg w-screen p-4">
          <div className="flex md:flex-row flex-col-reverse justify-between md:items-center md:mb-4 mb-2">
            {/* Info Section */}
            <section
              className="flex md:mt-5 mt-3 cursor-pointer font-main text-xl text-gray-main hover:text-blue-main active:text-blue-sub"
              onClick={() =>
                router.push(
                  `/explore/${postData.department.name}?id=${postData.department.id}&weather=전체&by=createdAt`
                )
              }
            >
              <span>{postData.department.name}</span>
              <Image
                src="/images/common/rightArrow_Icon.svg"
                alt="rightArrow_Icon"
                width={24}
                height={24}
              />
            </section>
            {/* Toggle Section */}
            {user.isLogin ? <ToggleSection postData={postData} /> : null}
          </div>
          {/* Date Section */}
          <section className="flex justify-start mb-3 mt-6 font-main font-nomal lg:text-lg text-base text-gray-main">
            {moment(postData.createdAt).format("LL")}, {postData.weather}
          </section>
          {/* Title & Edit & description */}
          <section>
            <div className="flex justify-between">
              <div className="w-full md:mb-4 mb-2 font-main font-bold md:text-3xl text-2xl  text-black-main ">
                {postData.title}
              </div>
              {/* Edit Section */}
              <EditSection
                postData={postData}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            <div className="w-full mb-4 font-main font-normal md:text-xl text-lg  text-black-main ">
              {postData.description}
            </div>
            <div className="flex justify-end font-main font-nomal lg:text-lg text-base text-gray-main">
              by. {postData.user}
            </div>
          </section>
        </main>
      </div>
      {/* Line */}
      <div className="w-full border-1/2 border-b border-gray-sub" />
      <div className="flex justify-center">
        <main className="lg:w-lg w-screen p-4 mt-4">
          {/* Quil Editor */}
          <article
            className="md:text-lg text-base prose prose-blue max-w-none font-main text-gray-main"
            dangerouslySetInnerHTML={{ __html: postData.body }}
          ></article>
          {/* Reply Container */}
          <section className="mt-20">
            {postData.allow_reply && postData.posts_replies !== undefined ? (
              <>
                <div className="font-main font-bold text-black-main text-xl mt-12">
                  댓글
                </div>
                <div className="font-main font-normal text-gray-sub text-lg mb-8">
                  {`총 ${postData.posts_replies.length}개의 댓글이 남겨져 있습니다.`}
                </div>
                <Reply
                  target={{ id: String(postData.id), name: "post" }}
                  replies={postData.posts_replies}
                  placeholder={`${postData.user}님에게 응원의 댓글을 남겨주세요.`}
                />
              </>
            ) : (
              <div className="mt-48 text-right font-sub font-normal text-sm text-gray-sub">
                ※ 댓글 기능이 비활성화 되어있습니다.
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/detail/${encodeURI(slug)}`
  );

  const postData = postRes.data;

  return { props: { postData } };
};

export default Detail;
