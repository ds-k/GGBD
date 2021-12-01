interface IProps {
  context: string;
}

const MainBtn = ({ context }: IProps) => {
  return (
    <div>
      <button className="flex justify-center items-center w-20 h-8 bg-blue-main rounded-full font-sub text-white">
        {context}
      </button>
    </div>
  );
};

export default MainBtn;
