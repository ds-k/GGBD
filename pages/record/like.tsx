import HeadInfo from "../../components/global/HeadInfo";
import { NavSection } from "../../components/record/NavSection";
import { NoData } from "../../components/common/NoData";

const Like = () => {
  return (
    <>
      {/* headInfo */}
      <HeadInfo
        title={"나의 기록 | 응원한 글"}
        content={"공감병동에서 응원한 글입니다."}
      />
      {/* Record Page */}
      <body className="flex justify-center md:p-8 p-4">
        <main className="lg:w-lg w-screen">
          {/* Nav Section */}
          <NavSection tap={"응원한 글"} />
          {/* Post Section */}
          <NoData
            comment={"응원한 글이 없습니다."}
            description={"응원이 필요한 많은 분들에게 힘이되어 주세요."}
          />
        </main>
      </body>
    </>
  );
};

export default Like;
