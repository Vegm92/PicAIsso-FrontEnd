import { Outlet } from "react-router";
import imageMock from "../../mocks/imageMock";
import Card from "../Card/Card";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Card image={imageMock} />
      <Outlet />
    </>
  );
};

export default Layout;
