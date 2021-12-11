import { useState } from "react";
import ListTitle from "../common/ListTitle";

const RegionSection = () => {
  const [region, setRegion] = useState<string>("전체");
  const regions = [
    "전체",
    "서울",
    "경기 남부",
    "경기 서북부",
    "강원",
    "충남",
    "충북",
    "전남",
    "전북",
    "경북",
    "경남 동부",
    "경남 서부",
  ];

  return (
    <div className="flex flex-col">
      {/* List Title */}
      <section>
        <ListTitle title={"지역"} />
      </section>
      {/* Region List */}
      <section className="grid lg:grid-cols-2 grid-cols-4 gap-x-8 gap-y-0 my-5 ml-2">
        {regions.map((el, idx) => {
          return (
            <div key={idx}>
              <div
                className={
                  "cursor-pointer my-1 font-sub font-normal lg:text-lg text-base hover:text-blue-main active:text-blue-main " +
                  (el === region ? "text-blue-main" : "text-gray-sub")
                }
                onClick={() => setRegion(el)}
              >
                {el}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RegionSection;
