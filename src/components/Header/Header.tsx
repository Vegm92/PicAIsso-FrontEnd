import { Divider, Flex, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import Login from "../../pages/Login/Login";
import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return (
    <HeaderStyled className="main-header">
      <Flex className="tittle" alignItems={"center"}>
        <span>Pic</span>
        <span className="tittle ai">AI</span>
        <span>sso</span>
        {/* <Heading color={"white"}>PicAIsso</Heading> */}

        <Spacer />

        {isLogged ? (
          <Link to="/" className="main-header__link" onClick={logoutUser}>
            Log out
          </Link>
        ) : (
          <Link to="/login" className="main-header__link">
            Log in
          </Link>
        )}
      </Flex>

      <Divider />

      {isLogged ? (
        <nav className="main-header__navigation">
          <NavLink to="/" className="link__Home">
            Home
          </NavLink>
          <NavLink to="/createPage" className="link__Create">
            Create
          </NavLink>
          <NavLink to="/myCollection" className="link__MyCollection">
            My Collection
          </NavLink>
        </nav>
      ) : (
        <nav className="main-header__navigation">
          <NavLink to="/" className="link__Home">
            Home
          </NavLink>
          <NavLink to="/createPage" className="link__Create">
            Create
          </NavLink>
        </nav>
      )}
    </HeaderStyled>
  );
};

export default Header;
