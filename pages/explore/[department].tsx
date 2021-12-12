import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";

const Explore = ({ departmentData, postData }: any) => {
  const router = useRouter();
  const { department } = router.query;
  console.log(postData);
  return (
    <>
      <HeadInfo
        title={
          department !== "전체" ? `글 둘러보기 - ${department}` : "글 둘러보기"
        }
        content={`${department}`}
      />
      <div className="flex">
        <Link href={`/explore/전체`}>
          <a>
            <h1>모든 글 보기</h1>
          </a>
        </Link>
        {departmentData.map((department: any) => {
          return (
            <Link
              key={department.id}
              href={`/explore/${department.name}-${department.id}`}
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
            <Link
              key={post.id}
              href={post.link} // ! [slug].tsx로 바꿀 예정
            >
              <a>
                <div>
                  {/* // * card 섹션 */}
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={240}
                    height={200}
                  ></Image>
                  <h1 className="text-blue-main text-lg">{post.title}</h1>
                  <h4 className="text-gray-sub text-sm">{post.description}</h4>
                </div>
              </a>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { department } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${encodeURI(
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
