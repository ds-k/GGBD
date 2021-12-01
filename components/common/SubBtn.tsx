interface IProps {
  context: string;
}

const SubBtn = ({ context }: IProps) => {
  return (
    <div>
      <button className="flex justify-center items-center w-20 h-8 bg-white border border-blue-main rounded-full font-sub text-blue-main text-sm">
        {context}
      </button>
    </div>
  );
};

export default SubBtn;
