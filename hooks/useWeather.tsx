/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import WeatherBtn from "../components/common/WeatherBtn";
export type WeatherCondition = "맑음" | "구름" | "비" | "전체" | "";
type UseWeathersResult = [WeatherCondition, () => JSX.Element];

export const useWeather = (
  labels: WeatherCondition[] = ["맑음", "구름", "비"],
  initialWeather: WeatherCondition
): UseWeathersResult => {
  const [weather, setWeather] = useState<WeatherCondition>(
    initialWeather ?? ""
  );

  const renderWeathers = () => (
    <>
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
    </>
  );

  return [weather, renderWeathers];
};
