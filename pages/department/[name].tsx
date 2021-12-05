import axios from "axios";
import HeadInfo from "../../components/global/HeadInfo";

const Department = ({ department }: any) => {
  const { name, description } = department;

  return (
    <>
      <HeadInfo
        title={`${name}의 이야기`}
        content={`${name}에 대해 알고계신 정보를 공유해 주세요.`}
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
