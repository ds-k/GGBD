import Link from "next/link";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";
import Reply from "../../components/reply/Reply";
import { ReplyType } from "../../types/reply";
import { DepartmentType } from "../../types/department";

interface IProps {
  department: DepartmentType;
  replies: ReplyType[];
}

const DepartmentBoard = ({ department, replies }: IProps) => {
  const { name, description, id } = department;

  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={`진료과별 이야기 | ${name}`}
        content={`${name}에 대해 알고계신 정보를 공유해 주세요.`}
      />
      {/* DepartmentBoard Page */}
      <body className="flex justify-center md:p-8 p-4">
        <main className="lg:w-lg w-screen">
          {/* Title Container */}
          <section className="mt-2 mb-12">
            {/* Go to department */}
            <Link href={"/department"}>
              <a>
                <button className="flex items-center font-main font-normal text-blue-main active:text-blue-sub mb-4">
                  <Image
                    src="/images/common/leftArrow_Icon.svg"
                    alt="leftArrow_Icon"
                    width={20}
                    height={20}
                  />
                  <div>다른 진료과 선택</div>
                </button>
              </a>
            </Link>
            {/* Title */}
            <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl mr-3 text-black-main">
              {name}
            </header>
            {/* Description */}
            <hgroup className="font-main font-nomal lg:text-xl md:text-lg text-base md:mt-2 mt-1 text-gray-sub">
              <span>{description}</span>
            </hgroup>
          </section>
          {/* Reply Container */}
          <section>
            <Reply
              comment={"공유된 정보가 없습니다."}
              description={`${name}에 대해 알고계신 정보를 공유해 주세요.`}
              target={{ id, name: "department" }}
              replies={replies}
              placeholder={`${name}에 대한 정보를 공유해 주세요.`}
            />
          </section>
        </main>
      </body>
    </>
  );
};

export default DepartmentBoard;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const { id } = query;

  const replyRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department/reply/${id}`
  );

  const replyResData = replyRes.data;
  const replies = replyResData.departments_replies;

  delete replyResData.departments_replies;

  return {
    props: {
      replies,
      department: replyResData,
    },
  };
};
