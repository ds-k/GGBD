import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import Image from "next/image";
import HospitalSection from "../../components/hospital/HospitalSection";
import RegionSection from "../../components/hospital/RegionSection";

const Hospital = () => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"상급종합병원"}
        content={"보건복지부에서 선정한 전국 45개의 상급종합병원 목록입니다."}
      />
      {/* Hospital Page */}
      <div className="flex justify-center md:p-8 p-4 h-screen">
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
              src="/images/hospital/gate_picture.svg"
              alt="gate_picture"
              width={1031}
              height={277}
            />
          </section>
          {/* contents */}
          <div className="flex justify-between">
            {/* Hospital List Section */}
            <HospitalSection />
            {/* Region List Section */}
            <RegionSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
