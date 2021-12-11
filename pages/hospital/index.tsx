import axios from "axios";
import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import Image from "next/image";
import HospitalSection from "../../components/hospital/HospitalSection";
import RegionSection from "../../components/hospital/RegionSection";

interface IProps {
  hospitals: [
    {
      id: number;
      region: string;
      name: string;
      homepage: string;
      phone: string;
      address: string;
    }
  ];
}

const Hospital = ({ hospitals }: IProps) => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"상급종합병원"}
        content={"보건복지부에서 선정한 전국 45개의 상급종합병원 목록입니다."}
      />
      {/* Hospital Page */}
      <div className="flex justify-center md:p-8 p-4">
        <div className="lg:w-lg w-screen">
          {/* Title Section */}
          <Title
            title={"상급종합병원"}
            firstSubTitle={
              "보건복지부에서 선정한 전국 45개의 상급종합병원 목록입니다."
            }
          />
          {/* Img Section */}
          <section className="lg:my-4 md:my-3 my-2 w-full">
            <Image
              src="/images/hospital/gate_Picture.svg"
              alt="gate_Picture"
              width={1031}
              height={277}
            />
          </section>
          {/* contents */}
          <div className="flex lg:flex-row lg:justify-between flex-col-reverse">
            {/* Hospital List Section */}
            <HospitalSection hospitals={hospitals} />
            {/* Region List Section */}
            <RegionSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospital;

export async function getStaticProps() {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/Hospital`
  );
  const data = getData.data;
  return {
    props: {
      hospitals: data,
    },
  };
}
