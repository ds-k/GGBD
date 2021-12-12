import Link from "next/link";
import ListTitle from "../common/ListTitle";
import PhoneIcon from "../icon/PhoneIcon";
import LocationMarker from "../icon/LocationMaker";
import HomeIcon from "../icon/HomeIcon";

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

const HospitalSection = ({ hospitals }: IProps) => {
  return (
    <div
      className={
        "flex flex-col lg:w-md " +
        (hospitals.length < 5 ? "lg:mb-0 md:mb-40 mb-80 " : "")
      }
    >
      {/* List Title */}
      <section>
        <ListTitle title={"상급종합병원 목록"} />
      </section>
      {/* 병원 정보 */}
      <section>
        {hospitals.map((el) => {
          return (
            <div
              key={el.id}
              className="flex justify-between items-center lg:mt-5 mt-2 lg:mb-8 mb-6 mx-2 "
            >
              {/* Info Contents */}
              <div>
                {/* 병원 이름 */}
                <div className=" font-main font-normal text-black-main md:text-2xl text-xl mb-1">
                  <span>{el.name}</span>
                </div>
                {/* 병원 상세 정보 */}
                <div className="flex font-main font-normal md:text-base text-sm">
                  <address className="flex items-center mr-4">
                    <a
                      href={`https://map.naver.com/v5/search/${el.address}`}
                      className="flex items-center not-italic"
                    >
                      <LocationMarker color={"#0984C0"} />
                      <span className="text-gray-sub hover:text-blue-main active:text-blue-sub ml-1">
                        {el.address}
                      </span>
                    </a>
                  </address>
                  <address className="md:block hidden">
                    <a
                      href={`${el.phone}`}
                      className="flex items-center not-italic"
                    >
                      <PhoneIcon color={"#0984C0"} />
                      <span className="text-gray-sub hover:text-blue-main active:text-blue-sub ml-1">
                        {el.phone}
                      </span>
                    </a>
                  </address>
                </div>
              </div>
              {/* 홈페이지 링크 */}
              <Link href={`${el.homepage}`}>
                <a>
                  <div className="cursor-pointer flex justify-center items-center border border-blue-main active:border-blue-sub rounded-full md:w-12 md:h-12 w-10 h-10">
                    <HomeIcon color={"#0984C0"} />
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HospitalSection;
