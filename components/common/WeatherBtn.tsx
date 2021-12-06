interface IProps {
  context: string;
  weather: string;
  handleClick: () => void;
}

const WeatherBtn = ({ context, weather, handleClick }: IProps) => {
  return (
    <button
      className={
        "flex justify-center items-center w-20 h-8 bg-white border border-gray-sub hover:border-blue-main rounded-full font-sub text-sm text-gray-sub hover:text-blue-main" +
        (weather === context
          ? "text-sm border border-blue-main text-blue-main "
          : "")
      }
      onClick={handleClick}
    >
      <div>{context}</div>
    </button>
  );
};

export default WeatherBtn;
