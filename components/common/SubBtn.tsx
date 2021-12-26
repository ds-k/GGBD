interface IProps {
  context: string;
  handleClick?: () => void;
}

const SubBtn = ({ context, handleClick }: IProps) => {
  return (
    <div>
      <button
        className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm active:border-blue-sub active:text-blue-sub"
        onClick={handleClick}
      >
        {context}
      </button>
    </div>
  );
};

export default SubBtn;
