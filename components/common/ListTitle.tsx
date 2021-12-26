import Image from "next/image";

interface IProps {
  title: string;
}

const ListTitle = ({ title }: IProps) => {
  return (
    <>
      <section className="flex items-center">
        <Image
          src="/images/common/rightArrow_Icon.svg"
          alt="rightArrow_Icon"
          width={24}
          height={24}
        />
        <header className="font-main font-normal md:text-xl text-base text-gray-sub">
          {title}
        </header>
      </section>
    </>
  );
};

export default ListTitle;
