import axios from "axios";
import HeadInfo from "../../components/global/HeadInfo";
import Title from "../../components/common/Title";
import Image from "next/image";
import HospitalSection from "../../components/hospital/HospitalSection";
import RegionSection from "../../components/hospital/RegionSection";
import { useRouter } from "next/router";
import BackToTop from "../../components/common/BackToTop";

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
  const router = useRouter();

  const { region } = router.query;

  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={
          region === "전체"
            ? "상급종합병원"
            : `${String(region).replace("-", " ")}의 상급종합병원`
        }
        content={
          region === "전체"
            ? "보건복지부에서 선정한 전국 45개의 상급종합병원 목록입니다."
            : `${String(region).replace(
                "_",
                " "
              )} 지역의 상급종합병원 목록입니다.`
        }
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
            <RegionSection query={region} />
          </div>
          {region === "전체" ? (
            <section className="flex justify-end mt-8">
              <BackToTop />
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Hospital;

export async function getStaticPaths() {
  const regions = [
    "전체",
    "서울",
    "경기-남부",
    "경기-서북부",
    "강원",
    "충남",
    "충북",
    "전남",
    "전북",
    "경북",
    "경남-동부",
    "경남-서부",
  ];

  return {
    paths: regions.map((el) => ({
      params: {
        region: el,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/hospital/${encodeURI(params.region)}`
  );
  const data = getData.data;
  return {
    props: {
      hospitals: data,
    },
  };
}
