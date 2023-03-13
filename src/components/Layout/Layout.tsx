import { Outlet } from "react-router";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default Layout;
