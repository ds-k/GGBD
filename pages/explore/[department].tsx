import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";

const Explore = ({ departmentData, postData }: any) => {
  console.log(postData);
  return (
    <>
      <HeadInfo title={"모든 글 보기"} content={""} />
      <div className="flex">
        <Link href={`/explore/all`}>
          <a>
            <h1>모든 글 보기</h1>
          </a>
        </Link>
        {departmentData.map((department: any) => {
          return (
            <Link
              key={department.id}
              href={`/explore/${encodeURIComponent(department.name)}`}
            >
              <a>
                <h1>{department.name}</h1>
              </a>
            </Link>
          );
        })}
      </div>
      <section className="grid grid-cols-4 gap-3">
        {postData.map((post: any) => {
          return (
            <div key={post.id}>
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={240}
                height={200}
              ></Image>
              <h1 className="text-blue-main text-lg">{post.title}</h1>
              <h4 className="text-gray-sub text-sm">{post.description}</h4>
            </div>
          );
        })}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { department } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${encodeURIComponent(
      department
    )}?offset=0&limit=8`
  );
  const departmentRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const departmentData = departmentRes.data;
  const postData = postRes.data;

  return { props: { departmentData, postData } };
};

export default Explore;
