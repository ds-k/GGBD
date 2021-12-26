import { useState, Dispatch, SetStateAction } from "react";
import MoreIcon from "../icon/MoreIcon";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userState } from "../../state/atom";
import { PostType } from "../../types/post";

interface IProps {
  postData: PostType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const EditSection = ({ postData, setIsModalOpen }: IProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user] = useRecoilState(userState);

  return (
    <section>
      <div className="w-8">
        {user.id === postData.users_id ? (
          <div>
            {isOpen ? (
              <div
                className="fixed inset-0 w-screen h-screen cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : null}
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex flex-col items-end"
            >
              <div
                onMouseDown={() => {
                  setIsClick(true);
                }}
                onMouseUp={() => setIsClick(false)}
              >
                <MoreIcon color={isClick ? "#0984C0" : "#AAA7B0"} />
              </div>
              {isOpen ? (
                <div className="absolute flex mt-7 flex-col font-sub text-base w-24 mr-1 text-gray-sub bg-white border border-gray-sub">
                  <Link href={`/post/edit/${postData.slug}`}>
                    <a>
                      <span className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub border-b border-gray-sub">
                        수정
                      </span>
                    </a>
                  </Link>
                  <span
                    className="flex justify-center items-center cursor-pointer h-9 hover:text-blue-main active:text-blue-sub"
                    onClick={() => setIsModalOpen(true)}
                  >
                    삭제
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default EditSection;
