import React, { useState, useEffect } from "react";
import departmentData from "../../data/departmentData.json";
import ArrowLeft from "../../components/icon/ArrowLeft";
import ArrowRight from "../../components/icon/ArrowRight";
import Link from "next/link";
import { WeatherCondition } from "../../hooks/useWeather";

interface IProps {
  weather: WeatherCondition;
  order: string;
  id: string | string[] | undefined;
}

const Carousel = ({ weather, order, id }: IProps) => {
  const [currentFirst, setCurrentFirst] = useState(0);
  const [isLeftClick, setIsLeftClick] = useState(false);
  const [isRightClick, setIsRightClick] = useState(false);
  const curIdx = departmentData.findIndex(
    (department) => department.id === Number(id)
  );

  useEffect(() => {
    if (curIdx <= 1 || curIdx >= 41) return;
    setCurrentFirst(curIdx - 2);
  }, [curIdx]);

  return (
    <section className="hidden md:flex justify-between items-center mt-4">
      <div
        className="flex items-center justify-center w-1/12 cursor-pointer"
        onClick={() => {
          if (currentFirst <= 0) return null;
          setCurrentFirst(currentFirst - 1);
        }}
        onMouseDown={() => {
          if (currentFirst <= 0) return null;
          setIsLeftClick(true);
        }}
        onMouseUp={() => {
          if (currentFirst <= 0) return null;
          setIsLeftClick(false);
        }}
      >
        <ArrowLeft color={isLeftClick ? "#0984c0" : "#AAA7B0"} />
      </div>
      <div className="grid grid-cols-5 md:gap-2 lg:gap-6 w-10/12 ">
        {departmentData.map((department: any, idx: number) => {
          return (
            <Link
              key={department.id}
              href={`/explore/${department.name.replace(" ", "-")}?id=${
                department.id
              }&weather=${weather}&by=${order}`}
            >
              <a
                className={
                  (currentFirst <= idx && currentFirst + 4 >= idx
                    ? "flex justify-center items-center text-sm lg:text-base lg:h-16 md:h-16 h-14 border text-gray-main hover:text-blue-main border-gray-sub hover:border-blue-main cursor-pointer active:border-blue-sub active:text-blue-sub select-none"
                    : "hidden") +
                  (department.id === Number(id) ? " border-blue-main" : "")
                }
              >
                <span
                  className={
                    department.id === Number(id) ? " text-blue-main" : ""
                  }
                >
                  {department.name}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
      <div
        className="flex items-center justify-center w-1/12 cursor-pointer"
        onClick={() => {
          if (currentFirst >= 38) return null;
          setCurrentFirst(currentFirst + 1);
        }}
        onMouseDown={() => {
          if (currentFirst >= 38) return null;
          setIsRightClick(true);
        }}
        onMouseUp={() => {
          if (currentFirst >= 38) return null;
          setIsRightClick(false);
        }}
      >
        <ArrowRight color={isRightClick ? "#0984c0" : "#AAA7B0"} />
      </div>
    </section>
  );
};

export default Carousel;
