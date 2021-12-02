import HeadInfo from "../../components/global/HeadInfo";
import { useRouter } from "next/router";

const Department = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <HeadInfo
        title={"진료과별 이야기"}
        content={"진료과별 이야기를 함께 나눠 보세요."}
      />
      <div>Department : {name}</div>
    </>
  );
};

export default Department;
