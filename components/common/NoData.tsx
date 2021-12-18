import Image from "next/image";

interface IProps {
  comment: string;
  description?: string;
}

export const NoData = ({ comment, description }: IProps) => {
  return (
    <section className="flex flex-col items-center mb-40">
      <Image
        src="/images/global/noData.svg"
        alt="intro"
        width={500}
        height={500}
      />
      <header className="font-main font-bold lg:text-2xl md:text-xl text-lg lg:mb-2 text-black-main">
        {comment}
      </header>
      <hgroup className="flex flex-row font-main font-nomal lg:text-xl md:text-lg text-base text-gray-sub">
        {description}
      </hgroup>
    </section>
  );
};
