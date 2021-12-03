import Intro from "../components/home/Intro";
import SectionTitle from "../components/home/SectionTitle";
import Department from "../components/home/Department";
import PostSection from "../components/home/PostSection";
import axios from "axios";
import Image from "next/image";
import BackToTop from "../components/common/BackToTop";

interface IProps {
  departments: [{ id: number; name: string }];
}

const Home = ({ departments }: IProps) => {
  return (
    <div className="flex justify-center lg:p-8 md:p-8 p-4">
      <div className="lg:w-lg md:w-md w-auto">
        <Intro />
        <SectionTitle
          title={"응원이 필요한 글"}
          firstSubTitle={"응원이 필요한 글들을 모았습니다."}
          secondSubTitle={"여러분의 사랑을 나눠주세요."}
        />
        <PostSection />
        <SectionTitle
          title={"응원을 많이 받은 글"}
          firstSubTitle={"응원을 많이 받은 글들을 모았습니다."}
          secondSubTitle={"여러분도 힘이 되어 주세요."}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1540287983765-d95785313eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2382&q=80"
          alt="sunny"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1429679310900-bad303d0e63a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="sunny"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1508975174-c000113b5900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2380&q=80"
          alt="sunny"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80"
          alt="sunny"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1526642738196-ad8ed2d50805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
          alt="sunny"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1421790082661-8b611e70484b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80"
          alt="cloudy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1519184814414-e083efb8a3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
          alt="cloudy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1533592740891-f0470ef71e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG1pbmltYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="cloudy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1592993264644-2b645ab13878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
          alt="cloudy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1531593773601-7a75ca4cd915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="cloudy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1541087823427-949258b6ffee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="rainy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1597842325046-347f754e8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="rainy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1486184841738-8386d5ea4497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80"
          alt="rainy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
          alt="rainy"
          width={240}
          height={209}
        />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1532928448850-d740ccdd9f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="rainy"
          width={240}
          height={209}
        />

        <SectionTitle
          title={"진료과별 이야기"}
          firstSubTitle={"진료과별로 이야기를 나눌 수 있습니다."}
          secondSubTitle={"알고계신 정보를 공유해 보세요."}
        />
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
