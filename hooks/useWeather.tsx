/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import WeatherBtn from "../components/common/WeatherBtn";
type UseWeathersResult = [string, () => JSX.Element];
type WeatherCondition = "맑음" | "구름" | "비" | "전체";

export const useWeather = (
  labels: WeatherCondition[] = ["맑음", "구름", "비"]
): UseWeathersResult => {
  const [weather, setWeather] = useState<string>("");

  const renderWeathers = () => (
    <div className={`grid grid-cols-${labels.length} gap-2`}>
      {labels.map((label, idx) => {
        return (
          <WeatherBtn
            key={idx}
            context={label}
            weather={weather}
            handleClick={() => setWeather(label)}
          />
        );
      })}
    </div>
  );

  return [weather, renderWeathers];
};
