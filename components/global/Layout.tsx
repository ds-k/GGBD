import { ReactElement } from "react";
import HeadInfo from "./HeadInfo";
import Nav from "./Nav";
import Footer from "./Footer";

interface IProps {
  children: ReactElement;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div className="pt-14 min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
