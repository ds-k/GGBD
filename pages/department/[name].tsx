import axios from "axios";
import HeadInfo from "../../components/global/HeadInfo";

const Department = ({ department }: any) => {
  const { name, description } = department;

  return (
    <>
      <HeadInfo
        title={"진료과별 이야기"}
        content={"진료과별 이야기를 함께 나눠 보세요."}
      />
      <div>Department : {name}</div>
      <div>{description}</div>
    </>
  );
};

export default Department;

interface IProps {
  id: number;
  name: string;
}

export async function getStaticPaths() {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const data = getData.data;

  return {
    paths: data.map((el: IProps) => ({
      params: {
        name: el.name.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const getData = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department/${encodeURI(params.name)}`
  );
  const data = getData.data;
  return {
    props: {
      department: data,
    },
  };
}
