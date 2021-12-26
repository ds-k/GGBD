interface IProps {
  title: string;
  firstSubTitle: string;
  secondSubTitle?: string;
}
const Title = ({ title, firstSubTitle, secondSubTitle }: IProps) => {
  return (
    <section className="lg:mt-8 mt-4 select-none">
      <header className="font-main font-bold lg:text-3xl md:text-2xl text-xl lg:mb-2 text-black-main">
        {title}
      </header>
      <hgroup className="flex flex-row font-main font-nomal lg:text-xl md:text-lg text-base text-gray-sub">
        <span>{firstSubTitle}</span>
        {secondSubTitle ? (
          <span className="md:block hidden">&nbsp;{secondSubTitle}</span>
        ) : null}
      </hgroup>
    </section>
  );
};

export default Title;
