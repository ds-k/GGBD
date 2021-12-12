import HeadInfo from "../../../components/global/HeadInfo";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <HeadInfo title={"Detail"} content={""} />
      <div>{slug}</div>
    </>
  );
};

export default Detail;
