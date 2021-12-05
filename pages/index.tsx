import axios from "axios";
import Intro from "../components/home/Intro";
import Title from "../components/common/Title";
import Department from "../components/home/Department";
import PostSection from "../components/home/PostSection";
import BackToTop from "../components/common/BackToTop";

interface IProps {
  departments: [{ id: number; name: string }];
}

const Home = ({ departments }: IProps) => {
  return (
    <div className="flex justify-center md:p-8 p-4">
      <div className="lg:w-lg w-screen">
        <Intro />
        <div className="mt-8">
          <Title
            title={"응원이 필요한 글"}
            firstSubTitle={"응원이 필요한 글들을 모았습니다."}
            secondSubTitle={"여러분의 사랑을 나눠주세요."}
          />
        </div>
        <PostSection />
        <div className="mt-8">
          <Title
            title={"응원을 많이 받은 글"}
            firstSubTitle={"응원을 많이 받은 글들을 모았습니다."}
            secondSubTitle={"여러분도 힘이 되어 주세요."}
          />
        </div>
        <div className="mt-8">
          <Title
            title={"진료과별 이야기"}
            firstSubTitle={"진료과별로 정보를 공유할 수 있습니다."}
            secondSubTitle={"여러분도 함께해주세요."}
          />
        </div>
        <Department departments={departments} />
        <section className="flex justify-end mt-8">
          <BackToTop />
        </section>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const data = getData.data;
  return {
    props: {
      departments: data,
    },
  };
}
