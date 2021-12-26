interface IProps {
  context: string;
  handleClick?: () => void;
}

const MainBtn = ({ context, handleClick }: IProps) => {
  return (
    <div>
      <button
        className="flex justify-center items-center w-20 h-8 bg-blue-main rounded-full font-sub text-white text-sm active:bg-blue-sub"
        onClick={handleClick}
      >
        {context}
      </button>
    </div>
  );
};

export default MainBtn;
