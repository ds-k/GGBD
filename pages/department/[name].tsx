import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import HeadInfo from "../../components/global/HeadInfo";

interface IDepartment {
  department: { name: string; description: string };
}

const DepartmentBoard = ({ department }: IDepartment) => {
  const { name, description } = department;

  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={`진료과별 이야기 | ${name}`}
        content={`${name}에 대해 알고계신 정보를 공유해 주세요.`}
      />
      {/* DepartmentBoard Page */}
      <body className="flex justify-center md:p-8 p-4 h-screen">
        <main className="lg:w-lg w-screen">
          <section className="lg:mt-8 mt-4">
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
            <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl mr-3 text-black-main">
              {name}
            </header>
            <hgroup className="font-main font-nomal lg:text-xl md:text-lg text-base md:mt-2 mt-1 text-gray-sub">
              <span>{description}</span>
            </hgroup>
          </section>
        </main>
      </body>
    </>
  );
};

export default DepartmentBoard;

interface IProps {
  id: number;
  name: string;
}

export async function getStaticPaths() {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const data = getData.data;

  return {
    paths: data.map((el: IProps) => ({
      params: {
        name: el.name.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department/${encodeURI(params.name)}`
  );
  const data = getData.data;
  return {
    props: {
      department: data,
    },
  };
}
