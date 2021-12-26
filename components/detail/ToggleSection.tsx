import { useState, useEffect } from "react";
import Toggle from "../common/Toggle";
import { useRecoilState } from "recoil";
import { userState } from "../../state/atom";
import { useRouter } from "next/router";
import axios from "axios";
import { PostType } from "../../types/post";

interface IProps {
  postData: PostType;
}

const ToggleSection = ({ postData }: IProps) => {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);

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

    if (result.status === 201) {
      if (context === "postLike") {
        setUser({
          ...user,
          likes: [...user.likes, { posts_id: postData.id }],
        });
      } else {
        setUser({
          ...user,
          scraps: [...user.scraps, { posts_id: postData.id }],
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

    if (result.status === 200) {
      if (context === "deleteLike") {
        setUser({
          ...user,
          likes: user.likes.filter(
            (like: { posts_id: number }) => like.posts_id !== postData.id
          ),
        });
      } else {
        setUser({
          ...user,
          scraps: user.scraps.filter(
            (scrap: { posts_id: number }) => scrap.posts_id !== postData.id
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
  return (
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
  );
};

export default ToggleSection;
