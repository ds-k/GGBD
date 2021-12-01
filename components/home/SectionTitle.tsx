interface IProps {
  title: string;
  firstSubTitle: string;
  secondSubTitle: string;
}
const SectionTitle = ({ title, firstSubTitle, secondSubTitle }: IProps) => {
  return (
    <>
      <section className="lg:mt-20 md:mt-20 mt-16">
        <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl lg:mb-2 text-black-main">
          {title}
        </header>
        <hgroup className="flex lg:flex-row md:flex-row flex-col font-main font-nomal lg:text-xl md:text-lg text-sm text-gray-sub">
          <span>{firstSubTitle}&nbsp;</span>
          <span>{secondSubTitle}</span>
        </hgroup>
      </section>
    </>
  );
};

export default SectionTitle;
