import { useState } from "react";

const WeatherBtn = () => {
  const [clickedWheather, setClickedWheather] = useState<string>("");

  return (
    <div className="w-screen flex justify-center">
      <div className="grid grid-cols-3 gap-2">
        {clickedWheather === "맑음" ? (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm"
            onClick={() => setClickedWheather("")}
          >
            <div>맑음</div>
          </button>
        ) : (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-gray-sub rounded-full font-sub text-gray-sub text-sm"
            onClick={() => setClickedWheather("맑음")}
          >
            <div>맑음</div>
          </button>
        )}
        {clickedWheather === "구름" ? (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm"
            onClick={() => setClickedWheather("")}
          >
            <div>구름</div>
          </button>
        ) : (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-gray-sub rounded-full font-sub text-gray-sub text-sm"
            onClick={() => setClickedWheather("구름")}
          >
            <div>구름</div>
          </button>
        )}
        {clickedWheather === "비" ? (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm"
            onClick={() => setClickedWheather("")}
          >
            <div>비</div>
          </button>
        ) : (
          <button
            className="flex justify-center items-center w-20 h-8 bg-white border border-gray-sub rounded-full font-sub text-gray-sub text-sm"
            onClick={() => setClickedWheather("비")}
          >
            <div>비</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default WeatherBtn;
