import { ReactElement } from "react";
import HeadInfo from "./HeadInfo";

interface IProps {
  children: ReactElement;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <HeadInfo />
      <div>{children}</div>
    </>
  );
};

export default Layout;
