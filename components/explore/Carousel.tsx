import React, { useState } from "react";
import departmentData from "../../data/departmentData.json";
import ArrowLeft from "../../components/icon/ArrowLeft";
import ArrowRight from "../../components/icon/ArrowRight";
import Link from "next/link";
import { WeatherCondition } from "../../hooks/useWeather";

interface IProps {
  weather: WeatherCondition;
  order: string;
}

const Carousel = ({ weather, order }: IProps) => {
  const [currentCenter, setCurrentCenter] = useState(0);
  const [isLeftClick, setIsLeftClick] = useState(false);
  const [isRightClick, setIsRightClick] = useState(false);

  return (
    <section className="hidden md:flex justify-between items-center mt-4">
      <div
        className="flex items-center justify-center w-1/12 cursor-pointer"
        onClick={() => {
          if (currentCenter === 0) return null;
          setCurrentCenter(currentCenter - 1);
        }}
        onMouseDown={() => {
          if (currentCenter === 0) return null;
          setIsLeftClick(true);
        }}
        onMouseUp={() => {
          if (currentCenter === 0) return null;
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
                  currentCenter <= idx && currentCenter + 4 >= idx
                    ? "flex justify-center items-center text-sm lg:text-base lg:h-16 md:h-16 h-14 border text-gray-main hover:text-blue-main border-gray-sub hover:border-blue-main cursor-pointer active:border-blue-sub active:text-blue-sub"
                    : "hidden"
                }
              >
                {department.name}
              </a>
            </Link>
          );
        })}
      </div>
      <div
        className="flex items-center justify-center w-1/12 cursor-pointer"
        onClick={() => {
          if (currentCenter === 36) return null;
          setCurrentCenter(currentCenter + 1);
        }}
        onMouseDown={() => {
          if (currentCenter === 36) return null;
          setIsRightClick(true);
        }}
        onMouseUp={() => {
          if (currentCenter === 36) return null;
          setIsRightClick(false);
        }}
      >
        <ArrowRight color={isRightClick ? "#0984c0" : "#AAA7B0"} />
      </div>
    </section>
  );
};

export default Carousel;
