import axios from "axios";
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
        title={`${name}의 이야기`}
        content={`${name}에 대해 알고계신 정보를 공유해 주세요.`}
      />
      {/* DepartmentBoard Page */}
      <div className="flex justify-center md:p-8 p-4 h-screen">
        <div className="lg:w-lg w-screen">
          <section className="mt-4">
            <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl lg:mb-2 text-black-main">
              {name}
            </header>
            <hgroup className="font-main font-nomal lg:text-xl md:text-lg text-base text-gray-sub">
              <span>{description}</span>
            </hgroup>
          </section>
        </div>
      </div>
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
