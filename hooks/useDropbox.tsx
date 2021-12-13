/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

interface IUseDropbox {
  department: string;
  setDepartment: Dispatch<SetStateAction<string>>;
  renderDropbox: (option?: optionCondition) => JSX.Element;
  departmentId: number;
}

interface DropboxCondition {
  departments: [{ id: number; name: string }];
}

type optionCondition = "selectNone";

export const useDropbox = ({ departments }: DropboxCondition): IUseDropbox => {
  const [department, setDepartment] = useState<string>("");

  let departmentId;
  if (department !== "") {
    departmentId = departments.filter((el) => el.name === department)[0].id;
  } else {
    departmentId = 0;
  }

  const renderDropbox = (option?: optionCondition) => {
    return (
      <>
        <select
          className="cursor-pointer appearance-none mr-2 font-main font-nomal lg:text-xl text-lg text-gray-main outline-none "
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        >
          {option ? (
            <option value="" hidden>
              진료받고 계신 과는 어딘가요?
            </option>
          ) : null}
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

  return { department, departmentId, setDepartment, renderDropbox };
};
