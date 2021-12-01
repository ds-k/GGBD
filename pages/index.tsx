import type { NextPage } from "next";
import Intro from "../components/home/Intro";
import SectionTitle from "../components/home/SectionTitle";
import Department from "../components/home/Department";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="lg:w-lg md:w-md w-sm">
        <Intro />
        <SectionTitle
          title={"응원이 필요한 글"}
          firstSubTitle={"응원이 필요한 글들을 모았습니다."}
          secondSubTitle={"여러분의 사랑을 나눠주세요."}
        />
        <SectionTitle
          title={"응원을 많이 받은 글"}
          firstSubTitle={"응원을 많이 받은 글들을 모았습니다."}
          secondSubTitle={"여러분도 힘이 되어 주세요."}
        />
        <SectionTitle
          title={"진료과별 이야기"}
          firstSubTitle={"진료과별로 이야기를 나눌 수 있습니다."}
          secondSubTitle={"알고계신 정보를 공유해 보세요."}
        />
        <Department />
      </div>
    </div>
  );
};

export default Home;
