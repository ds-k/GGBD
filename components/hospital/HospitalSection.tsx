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
    <div className="flex flex-col">
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
              className="flex justify-between items-center my-8 ml-2"
            >
              {/* Info Contents */}
              <div>
                {/* 병원 이름 */}
                <div className=" font-main font-normal text-black-main text-2xl mb-1">
                  <span>{el.name}</span>
                </div>
                {/* 병원 상세 정보 */}
                <div className="grid grid-cols-2 font-main font-normal text-base">
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
                  <address>
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
                  <div className="cursor-pointer flex justify-center items-center border border-blue-main active:border-blue-sub rounded-full w-12 h-12">
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
