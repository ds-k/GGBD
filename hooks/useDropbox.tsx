/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

interface IUseDropbox {
  department: string;
  setDepartment: Dispatch<SetStateAction<string>>;
  renderDropbox: (option?: optionCondition) => JSX.Element;
}

interface DropboxCondition {
  departments: [{ id: number; name: string }];
}

type optionCondition = "all" | "select";

export const useDropbox = ({ departments }: DropboxCondition): IUseDropbox => {
  const [department, setDepartment] = useState<string>("");

  const renderDropbox = (option?: optionCondition) => {
    const renderSwitch = () => {
      switch (option) {
        case "all":
          return <option value="모든 글">모든 글</option>;
        case "select":
          return (
            <option value="" hidden>
              진료받고 계신 과는 어딘가요?
            </option>
          );
        default:
          return null;
      }
    };

    return (
      <>
        <select
          defaultValue={department}
          className="cursor-pointer appearance-none mr-2 font-main font-nomal lg:text-xl text-lg text-gray-main outline-none "
          onChange={(e) => setDepartment(e.target.value)}
        >
          {renderSwitch()}
          return (
          {departments.map((el) => {
            if (el.name === department) {
              return (
                <option key={el.id} value={el.name} selected>
                  {el.name}
                </option>
              );
            } else {
              return (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              );
            }
          })}
          );
        </select>
        <Image
          src="/images/common/dropBox_Icon.svg"
          alt="dropBox_Icon"
          width={20}
          height={20}
        />
      </>
    );
  };

  return { department, setDepartment, renderDropbox };
};
