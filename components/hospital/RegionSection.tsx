import { useState } from "react";
import Link from "next/link";
import ListTitle from "../common/ListTitle";

interface IProps {
  query: string | string[] | undefined;
}

const RegionSection = ({ query }: IProps) => {
  const [region, setRegion] = useState(query);
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
    <div className="flex flex-col lg:mt-0 md:mt-3 mt-4">
      {/* List Title */}
      <section>
        <ListTitle title={"지역"} />
      </section>
      {/* Region List */}
      <section className="grid lg:grid-cols-2 md:grid-cols-4 grid-cols-3 md:gap-x-8 gap-y-0 lg:mt-2 mt-0 ml-2 lg:mb-40 mb-8">
        {regions.map((el, idx) => {
          return (
            <Link key={idx} href={`/hospital/${el.replace(" ", "-")}`}>
              <a onClick={() => setRegion(el)}>
                <li
                  className={
                    "list-none cursor-pointer my-1 font-sub font-normal lg:text-lg md:text-base lg:sm hover:text-blue-main active:text-blue-main " +
                    (el === region ? "text-blue-main" : "text-gray-sub")
                  }
                >
                  {el}
                </li>
              </a>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default RegionSection;
