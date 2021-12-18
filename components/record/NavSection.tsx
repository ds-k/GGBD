import Link from "next/link";
import Title from "../common/Title";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atom";

interface IProps {
  tap: string;
}

export const NavSection = ({ tap }: IProps) => {
  const { nickname, id } = useRecoilValue(userState);

  return (
    <section>
      {/* Title */}
      <Title
        title={"나의 기록"}
        firstSubTitle={`${nickname}님의 공감병동 활동 기록입니다.`}
      />
      {/* Tap */}
      <div className="grid grid-cols-3 h-12 cursor-pointer my-8 font-sub font-normal ">
        <Link href={`/record/post?id=${id}`}>
          <a
            className={
              "flex justify-center items-center " +
              (tap === "작성한 글"
                ? "border border-blue-main text-blue-main"
                : "border-t border-b border-l border-gray-sub text-gray-sub")
            }
          >
            <span>작성한 글</span>
          </a>
        </Link>
        <Link href={`/record/like?id=${id}`}>
          <a
            className={
              "flex justify-center items-center " +
              (tap === "응원한 글"
                ? "border border-blue-main text-blue-main"
                : "border-t border-b border-gray-sub text-gray-sub ") +
              (tap === "작성한 글"
                ? "border-t border-b border-r border-gray-sub text-gray-sub "
                : "") +
              (tap === "스크랩한 글"
                ? "border-t border-b border-l border-gray-sub text-gray-sub "
                : "")
            }
          >
            <span>응원한 글</span>
          </a>
        </Link>
        <Link href={`/record/scrap?id=${id}`}>
          <a
            className={
              "flex justify-center items-center " +
              (tap === "스크랩한 글"
                ? "border border-blue-main text-blue-main"
                : "border-t border-b border-r border-gray-sub text-gray-sub")
            }
          >
            <span>스크랩한 글</span>
          </a>
        </Link>
      </div>
    </section>
  );
};
