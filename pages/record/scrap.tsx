import HeadInfo from "../../components/global/HeadInfo";
import { NavSection } from "../../components/record/NavSection";
import { NoData } from "../../components/common/NoData";

const Scrap = () => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"나의 기록 | 스크랩한 글"}
        content={"공감병동에서 스크랩한 글입니다."}
      />
      {/* Record Page */}
      <body className="flex justify-center md:p-8 p-4">
        <main className="lg:w-lg w-screen">
          {/* Nav Section */}
          <NavSection tap={"스크랩한 글"} />
          {/* Post Section */}
          <NoData
            comment={"스크랩한 글이 없습니다."}
            description={
              "힘이 되는 글을 발견했다면 스크랩을 통해 기록해 보세요."
            }
          />
        </main>
      </body>
    </>
  );
};

export default Scrap;
