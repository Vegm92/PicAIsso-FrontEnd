import { Outlet } from "react-router";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
