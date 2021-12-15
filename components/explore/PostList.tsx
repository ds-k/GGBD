import React from "react";
import { PostType } from "../../types";
import Link from "next/link";
import PostCard from "../common/PostCard";

interface IProps {
  postData: PostType[];
}
const PostList = ({ postData }: IProps) => {
  return (
    <div>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-9 mt-8">
        {postData.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          postData.map((post: any) => {
            return (
              <Link key={post.id} href={`/post/detail/${post.slug}`}>
                <a>
                  {/* card section */}
                  <PostCard post={post} />
                </a>
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default PostList;
