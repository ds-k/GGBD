interface IProps {
  title: string;
  firstSubTitle: string;
  secondSubTitle: string;
}
const SectionTitle = ({ title, firstSubTitle, secondSubTitle }: IProps) => {
  return (
    <>
      <section className="lg:mt-20 md:mt-12 mt-12">
        <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl lg:mb-2 text-black-main">
          {title}
        </header>
        <hgroup className="flex flex-row font-main font-nomal lg:text-xl md:text-lg text-base text-gray-sub">
          <span>{firstSubTitle}&nbsp;</span>
          <span className="lg:block md:block hidden">{secondSubTitle}</span>
        </hgroup>
      </section>
    </>
  );
};

export default SectionTitle;
