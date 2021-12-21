import HeadInfo from "../../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "../../../state/atom";
import MoreIcon from "../../../components/icon/MoreIcon";
import Toggle from "../../../components/common/Toggle";
import moment from "moment";
import "moment/locale/ko";
import { PostType } from "../../../types/post";
import Reply from "../../../components/reply/Reply";

interface IProps {
  postData: PostType;
}

const Detail = ({ postData }: IProps) => {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);

  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [likes, setLikes] = useState({
    isLike: false,
    likesCount: postData.likes,
  });

  const [scraps, setScraps] = useState({
    isScrap: false,
    scrapsCount: postData.scraps,
  });

  useEffect(() => {
    if (user.isLogin) {
      if (user.likes) {
        const findLikes = user.likes.filter(
          (like: { posts_id: number }) => like.posts_id === postData.id
        );
        if (findLikes.length === 1) {
          setLikes({
            isLike: true,
            likesCount: likes.likesCount,
          });
        }
      }

      if (user.scraps) {
        const findScraps = user.scraps.filter(
          (scrap: { posts_id: number }) => scrap.posts_id === postData.id
        );
        if (findScraps.length === 1) {
          setScraps({
            isScrap: true,
            scrapsCount: scraps.scrapsCount,
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitPost = async (context: string) => {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/post/${context}`,
      {
        users_id: user.id,
        posts_id: postData.id,
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
      if (context === "postLike") {
        setUser({
          ...user,
          likes: [...user.likes, result.data.posts_id],
        });
      } else {
        setUser({
          ...user,
          scraps: [...user.scraps, result.data.posts_id],
        });
      }
      router.replace(router.asPath);
    }
  };

  const submitDelete = async (context: string) => {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/post/${context}?users_id=${user.id}&posts_id=${postData.id}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (result) {
      if (context === "deleteLike") {
        setUser({
          ...user,
          likes: user.likes.filter(
            (like: { posts_id: number }) =>
              like.posts_id === result.data.posts_id.posts_id
          ),
        });
      } else {
        setUser({
          ...user,
          scraps: user.scraps.filter(
            (scrap: { posts_id: number }) =>
              scrap.posts_id === result.data.posts_id.posts_id
          ),
        });
      }
      router.replace(router.asPath);
    }
  };

  const handleLikes = async () => {
    if (likes.isLike) {
      setLikes({
        isLike: false,
        likesCount: likes.likesCount - 1,
      });
      submitDelete("deleteLike");
    } else {
      setLikes({
        isLike: true,
        likesCount: likes.likesCount + 1,
      });
      submitPost("postLike");
    }
  };

  const handleScraps = () => {
    if (scraps.isScrap) {
      setScraps({
        isScrap: false,
        scrapsCount: scraps.scrapsCount - 1,
      });
      submitDelete("deleteScrap");
    } else {
      setScraps({
        isScrap: true,
        scrapsCount: scraps.scrapsCount + 1,
      });
      submitPost("postScrap");
    }
  };

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
            {user.isLogin ? (
              <section className="flex md:my-4 mt-0 mb-2 items-center justify-end">
                <div className="flex items-end">
                  <span className="mr-2 font-main font-nomal lg:text-xl text-lg text-gray-main">
                    응원하기
                  </span>
                  <span className="mr-2 font-main font-nomal lg:text-lg text-base text-gray-sub">
                    {likes.likesCount}개
                  </span>
                </div>
                <Toggle
                  isClick={likes.isLike}
                  handleClick={() => handleLikes()}
                  color={"bg-toggle-pink"}
                />
                <div className="flex items-end">
                  <span className="lg:ml-6 ml-4 mx-2 font-main font-nomal lg:text-xl text-lg text-gray-main">
                    스크랩하기
                  </span>
                  <span className="mr-2 font-main font-nomal lg:text-lg text-base text-gray-sub">
                    {scraps.scrapsCount}개
                  </span>
                </div>
                <Toggle
                  isClick={scraps.isScrap}
                  handleClick={() => handleScraps()}
                  color={"bg-toggle-yellow"}
                />
              </section>
            ) : null}
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
              <div className="w-8">
                {user.id === postData.users_id ? (
                  <div>
                    {isOpen ? (
                      <div
                        className="fixed inset-0 w-screen h-screen cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      />
                    ) : null}
                    <div
                      onClick={() => {
                        setIsOpen(!isOpen);
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
                      {isOpen ? (
                        <div className="absolute flex mt-7 flex-col font-sub text-base w-24 mr-1 text-gray-sub bg-white border border-gray-sub">
                          <Link href={`/post/edit/${postData.slug}`}>
                            <a>
                              <span className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub border-b border-gray-sub">
                                수정
                              </span>
                            </a>
                          </Link>
                          <span
                            className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub"
                            onClick={() => handleDeletePost()}
                          >
                            삭제
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
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
            className="prose prose-blue max-w-none font-main text-gray-main"
            dangerouslySetInnerHTML={{ __html: postData.body }}
          ></article>
          {/* Reply Container */}
          <section>
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
