import HeadInfo from "../../../components/global/HeadInfo";
import { GetServerSideProps } from "next";
import axios from "axios";
import { PostType } from "../../../types/post";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWeather } from "../../../hooks/useWeather";
import { useDropbox } from "../../../hooks/useDropbox";
import MainBtn from "../../../components/common/MainBtn";
import SubBtn from "../../../components/common/SubBtn";
import Toggle from "../../../components/common/Toggle";
import ChangePhoto from "../../../components/icon/ChangePhoto";
import {
  ReactQuill,
  modules,
  formats,
} from "../../../components/post/QuillEditor";
import { useRecoilValue } from "recoil";
import { userState } from "../../../state/atom";
import { DepartmentType } from "../../../types/department";

interface IProps {
  postData: PostType;
  departments: DepartmentType[];
}

const Edit = ({ postData, departments }: IProps) => {
  const router = useRouter();

  const { accessToken } = useRecoilValue(userState);
  const { department, departmentId, renderDropbox, setDepartment } = useDropbox(
    {
      departments,
    }
  );

  const [weather, renderWeathers] = useWeather(
    ["맑음", "구름", "비"],
    postData.weather
  );

  const [isPublic, setIsPublic] = useState<boolean>(postData.public);
  const [isActive, setIsActive] = useState<boolean>(postData.allow_reply);
  const [isChange, setIsChange] = useState<boolean>(false);

  const [value, setValue] = useState(postData.body);
  const [title, setTitle] = useState(postData.title);
  const [description, setDescription] = useState(postData.description);
  const [photo, setPhoto] = useState({
    id: 0,
    img: postData.thumbnail,
  });

  useEffect(() => {
    setDepartment(postData.department.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getPhoto = async () => {
      if (weather !== postData.weather && accessToken) {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/photo/${weather}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (result) {
          setPhoto({ img: result.data.img, id: result.data.id });
        }
      }
    };
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

  const changePhoto = async () => {
    if (weather !== "") {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/photo/${weather}?id=${photo.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (result) {
        setPhoto({ img: result.data.img, id: result.data.id });
      }
    }
  };

  interface formDataType {
    weather?: string;
    thumbnail?: string;
    departments_id?: string;
    title?: string;
    slug?: string;
    description?: string;
    body?: string;
    allow_reply?: boolean;
    public?: boolean;
  }

  const formData: formDataType = {};

  if (weather !== postData.weather) {
    formData.weather = weather;
  }

  if (photo.img !== postData.thumbnail) {
    formData.thumbnail = photo.img;
  }

  if (department !== postData.department.name) {
    formData.departments_id = departmentId;
  }

  if (title !== postData.title) {
    formData.title = title;
    formData.slug = title
      // eslint-disable-next-line no-useless-escape
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim, "")
      .replace(/\s/g, "-");
  }

  if (description !== postData.description) {
    formData.description = description;
  }

  if (value !== postData.body) {
    formData.body = value;
  }

  if (isActive !== postData.allow_reply) {
    formData.allow_reply = isActive;
  }

  if (isPublic !== postData.public) {
    formData.public = isPublic;
  }

  const handleSubmitPost = async () => {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/post?id=${postData.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (result.data.slug) {
      router.push(`/post/detail/${result.data.slug}`);
    } else {
      router.push(`/post/detail/${postData.slug}`);
    }
  };

  return (
    <>
      <HeadInfo
        title={"편집하기"}
        content={"남기신 기록은 언제든 자유롭게 편집할 수 있습니다."}
      />
      {/* CreatePost Page */}
      {/* Img Container */}
      <section className="flex flex-col justify-center items-center w-screen h-72 bg-gray-100">
        {weather === "" ? (
          <>
            <div className="z-10 font-main font-normal text-2xl text-gray-main">
              내 감정의 날씨는?
            </div>
            <div className="z-10 my-3 font-main font-normal text-sm text-gray-main">
              선택하신 감정과 어울리는 대표 사진이 선정됩니다.
            </div>
          </>
        ) : (
          <>
            {photo.img === "" ? null : (
              <div className="flex justify-center items-center w-screen">
                <Image
                  className="flex justify-center object-cover w-screen"
                  src={photo.img}
                  alt="sunny"
                  width={1920}
                  height={288}
                  layout="fixed"
                />
              </div>
            )}
            <div
              className="mb-8 absolute z-10 "
              onMouseDown={() => {
                setIsChange(true);
                changePhoto();
              }}
              onMouseUp={() => setIsChange(false)}
            >
              <ChangePhoto color={isChange ? "#0984C0" : "#AAA7B0"} />
            </div>
          </>
        )}
        {/* 날씨 선택 */}
        <div className="absolute z-10 mt-28 w-screen flex justify-center">
          <div className="grid grid-cols-3 gap-2">{renderWeathers()}</div>
        </div>
      </section>
      {/* Middle Container */}
      <div className="flex justify-center">
        <main className="lg:w-lg w-screen p-4">
          {/* Choose Departments */}
          <section className="flex md:flex-row flex-col-reverse justify-between md:mb-8 mb-6">
            <div className="flex md:mt-5 cursor-pointer">{renderDropbox()}</div>
            {/* Toggle */}
            <div className="flex md:mb-0 mt-4 mb-8 items-center justify-end">
              <div className="mr-2 font-main font-normal lg:text-lg text-base text-gray-main">
                글 공개 여부
              </div>
              <Toggle
                isClick={isPublic}
                handleClick={() => setIsPublic(!isPublic)}
              />
              <div className="lg:ml-6 ml-4 mx-2 font-main font-normal lg:text-lg text-base text-gray-main">
                댓글 활성화 여부
              </div>
              <Toggle
                isClick={isActive}
                handleClick={() => setIsActive(!isActive)}
              />
            </div>
          </section>
          {/* Title Input */}
          <section>
            <input
              type="text"
              maxLength={36}
              value={title}
              className="w-full md:mb-4 mb-2 font-main font-normal md:text-3xl text-2xl placeholder-gray-sub text-gray-main outline-none"
              placeholder="글의 제목을 입력해 주세요."
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              maxLength={54}
              value={description}
              className="w-full mb-4 font-main font-normal md:text-xl text-lg placeholder-gray-sub text-gray-main outline-none"
              placeholder="글의 내용을 간략하게 설명해 주세요."
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
        </main>
      </div>
      {/* Line */}
      <div className="w-full border-1/2 border-b border-gray-sub" />
      {/* Bottom Container */}
      <div className="flex justify-center">
        <main className="lg:w-lg w-screen p-4">
          <div className="text-right font-sub font-normal text-sm text-blue-main">
            ※ 드래그를 하면 글에 스타일을 입힐 수 있습니다.
          </div>
          {/* Quil Editor */}
          <section className="mt-4">
            <ReactQuill
              theme="bubble"
              placeholder="남기고 싶은 기록을 자유롭게 적어주세요."
              modules={modules}
              formats={formats}
              value={value}
              onChange={setValue}
            />
          </section>
          {/* Button Section */}
          <section className="flex justify-center">
            <div className="my-12 grid grid-cols-2 gap-2">
              <MainBtn
                context={"등록"}
                handleClick={() => handleSubmitPost()}
              />
              <SubBtn context={"취소"} handleClick={() => router.back()} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.query;

  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post/detail/${encodeURI(slug)}`
  );
  const postData = postRes.data;

  const departmentRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/department`
  );
  const departmentData = departmentRes.data;

  return { props: { postData, departments: departmentData } };
};

export default Edit;
