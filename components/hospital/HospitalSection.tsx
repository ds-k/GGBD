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
            <li
              key={el.id}
              className="list-none flex justify-between items-center lg:mt-5 mt-2 lg:mb-8 mb-6 mx-2 "
            >
              {/* Info Contents */}
              <div>
                {/* 병원 이름 */}
                <div className=" font-main font-normal text-black-main md:text-2xl text-xl mb-1">
                  <span>{el.name}</span>
                </div>
                {/* 병원 상세 정보 */}
                <div className="flex flex-col md:flex-row font-main font-normal md:text-base text-sm">
                  <address className="flex items-center mr-4">
                    <a
                      href={`https://map.naver.com/v5/search/${el.address}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center not-italic"
                    >
                      <LocationMarker color={"#0984C0"} />
                      <span className="text-gray-sub hover:text-blue-main active:text-blue-sub ml-1">
                        {el.address}
                      </span>
                    </a>
                  </address>
                  <address className="flex items-center md:mt-0 mt-1">
                    <a
                      href={`tel:${el.phone}`}
                      className="flex items-center not-italic pl-0.5"
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
              <a href={`${el.homepage}`} target="_blank" rel="noreferrer">
                <div className="cursor-pointer flex justify-center items-center border border-blue-main active:border-blue-sub rounded-full md:w-12 md:h-12 w-10 h-10">
                  <HomeIcon color={"#0984C0"} />
                </div>
              </a>
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default HospitalSection;
