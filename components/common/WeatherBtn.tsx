interface IProps {
  context: string;
  weather: string;
  handleClick: () => void;
}

const WeatherBtn = ({ context, weather, handleClick }: IProps) => {
  return (
    <button
      className={
        "flex justify-center items-center w-20 h-8 bg-white border rounded-full font-sub text-sm  select-none " +
        (weather === context
          ? "border-blue-main text-blue-main"
          : "border-gray-sub text-gray-sub")
      }
      onClick={handleClick}
    >
      <div>{context}</div>
    </button>
  );
};

export default WeatherBtn;
