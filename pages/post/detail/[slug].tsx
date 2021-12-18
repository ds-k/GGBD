import HeadInfo from "../../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

// import Toggle from "../../../components/common/Toggle";

const Detail = ({ postData }: any) => {
  const router = useRouter();

  console.log(postData);
  return (
    <>
      {/* headInfo */}
      <HeadInfo title={postData.title} content={postData.description} />
      <Image
        className="object-cover"
        src={postData.thumbnail}
        alt={postData.title}
        width={1920}
        height={288}
        layout="fixed"
      />
      <body className="flex justify-center">
        <main className="lg:w-lg w-screen p-4">
          <section className="flex md:flex-row flex-col-reverse justify-between md:mb-8 mb-6">
            <div
              className="flex md:mt-5 cursor-pointer font-main text-xl text-gray-main"
              onClick={() =>
                router.push(
                  `/explore/${postData.department.name}?id=${postData.department.id}&weather=전체&by=createdAt`
                )
              }
            >
              {postData.department.name}
            </div>
            {/* Toggle */}
            <div className="flex md:mb-0 mt-4 mb-8 items-center justify-end">
              <div className="mr-2 font-main font-nomal lg:text-lg text-base text-gray-main">
                응원하기
              </div>
              {/* <Toggle
                isClick={isPublic}
                handleClick={() => setIsPublic(!isPublic)}
              /> */}
              <div className="lg:ml-6 ml-4 mx-2 font-main font-nomal lg:text-lg text-base text-gray-main">
                스크랩하기
              </div>
              {/* <Toggle
                isClick={isActive}
                handleClick={() => setIsActive(!isActive)}
              /> */}
            </div>
          </section>
          {/* Title & description */}
          <section>
            <div className="w-full md:mb-4 mb-2 font-main font-bold md:text-3xl text-2xl  text-black-main ">
              {postData.title}
            </div>
            <div className="w-full mb-4 font-main font-normal md:text-xl text-lg  text-black-main ">
              {postData.description}
            </div>
          </section>
        </main>
      </body>
      {/* Line */}
      <div className="w-full border-1/2 border-b border-gray-sub" />
      <body className="flex justify-center">
        <main className="lg:w-lg w-screen p-4 mt-4">
          {/* Quil Editor */}
          <article
            className="prose prose-blue max-w-none font-main text-gray-main"
            dangerouslySetInnerHTML={{ __html: postData.body }}
          ></article>
        </main>
      </body>
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
