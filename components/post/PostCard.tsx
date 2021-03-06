import React from "react";
import Image from "next/image";
import { PostType } from "../../types/post";
import moment from "moment";
import "moment/locale/ko";

interface IProps {
  post: PostType;
}

const PostCard = ({ post }: IProps) => {
  return (
    <div>
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={249}
        height={200}
        layout="responsive"
      ></Image>
      <div className="flex items-center gap-3 mt-2 ">
        <div className="flex items-center gap-1">
          <Image
            src={`/images/explore/like.svg`}
            alt="likes"
            width={16}
            height={16}
          />
          <span className=" text-sm font-main text-black-main">
            {post.likes}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={`/images/explore/scrap.svg`}
            alt="scraps"
            width={18}
            height={18}
          />
          <span className=" text-sm font-main text-black-main">
            {post.scraps}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start  text-black-main font-main font-bold text-lg text-ellipsis line-clamp-1 ">
        <span>{post.title}</span>
      </div>
      <div className="mt-1 text-gray-sub font-main text-sm h-10 line-clamp-2">
        {post.description}
      </div>
      <div className="mt-1 pt-1 flex-col lg:flex-row flex justify-between border-t border-gray-200">
        <span className="text-gray-sub text-xs font-main">
          {moment(post.createdAt).format("LL")}, {post.weather}
        </span>
        <span className="text-gray-sub text-xs font-main">by. {post.user}</span>
      </div>
    </div>
  );
};

export default PostCard;
