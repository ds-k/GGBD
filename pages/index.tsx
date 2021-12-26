import axios from "axios";
import IntroSection from "../components/home/IntroSection";
import DepartmentSection from "../components/home/DepartmentSection";
import PostSection from "../components/home/PostSection";
import BackToTop from "../components/common/BackToTop";
import { DepartmentType } from "../types/department";
import { PostType } from "../types/post";
import { GetServerSideProps } from "next";

interface IProps {
  departments: DepartmentType[];
  byCreatedAtData: PostType[];
  byLikesData: PostType[];
}

const Home = ({ departments, byCreatedAtData, byLikesData }: IProps) => {
  return (
    <div className="flex justify-center md:p-8 p-4">
      {/* Main Container */}
      <div className="lg:w-lg w-screen">
        {/* Intro Section */}
        <IntroSection />
        {/* Post Card Section */}
        <PostSection
          byCreatedAtData={byCreatedAtData}
          byLikesData={byLikesData}
        />
        <DepartmentSection departments={departments} />
        <section className="flex justify-end mt-8">
          <BackToTop />
        </section>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [departmentRes, byCreatedAtRes, byLikesRes] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/department`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/main/created-at`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/main/likes`),
    ]);

    return {
      props: {
        departments: departmentRes.data,
        byCreatedAtData: byCreatedAtRes.data,
        byLikesData: byLikesRes.data,
      },
    };
  } catch (e) {
    return {
      props: {
        departments: [],
        byCreatedAtData: [],
        byLikesData: [],
      },
    };
  }
};
