import axios from "axios";
import HeadInfo from "../../components/global/HeadInfo";
import Link from "next/link";
import Title from "../../components/common/Title";

interface IProps {
  departments: [
    {
      id: number;
      name: string;
    }
  ];
}

const Department = ({ departments }: IProps) => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"진료과별 이야기"}
        content={"진료과별로 정보를 공유할 수 있습니다."}
      />
      {/* Department Page */}
      <div className="flex justify-center md:p-8 p-4 lg:mb-28">
        <div className="lg:w-lg w-screen">
          {/* Title */}
          <Title
            title={"진료과별 이야기"}
            firstSubTitle={"진료과별로 정보를 공유할 수 있습니다."}
          />
          {/* Contents */}
          <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 lg:gap-4 md:gap-4 gap-2 md:mt-4 mt-3 md:mb-8 mb-6">
            {departments.map((el) => {
              return (
                <li key={el.id} className="list-none">
                  <Link href={`/department/${el.name}?id=${el.id}`}>
                    <a>
                      <div className="flex justify-center items-center lg:h-16 md:h-16 h-12 border text-gray-main hover:text-blue-main border-gray-sub hover:border-blue-main cursor-pointer active:border-blue-sub active:text-blue-sub">
                        <div className="font-sub font-normal lg:text-sm md:text-sm text-xs">
                          {el.name}
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Department;

export async function getStaticProps() {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const data = getData.data;
  return {
    props: {
      departments: data,
    },
  };
}
