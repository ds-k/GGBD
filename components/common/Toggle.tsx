interface IProps {
  isClick: boolean;
  handleClick: () => void;
  color?: string;
}

const Toggle = ({ isClick, color, handleClick }: IProps) => {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => handleClick()}
    >
      <div
        className={
          "absolute z-10 rounded-full w-5 h-5 bg-white filter drop-shadow-base duration-300 transition-all transform" +
          (isClick ? " translate-x-5 " : " translate-x-0 ")
        }
      />
      <div
        className={
          "z-0 h-1 w-10 rounded-full bg-gray-sub" +
          (isClick
            ? color
              ? `h-1 w-10 ${color}`
              : "h-1 bg-blue-main"
            : "h-1 w-10 bg-gray-sub")
        }
      />
    </div>
  );
};

export default Toggle;
