import { Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <HeaderStyled className="main-header">
      <Flex className="tittle" alignItems={"center"}>
        <span>Pic</span>
        <span className="tittle ai">AI</span>
        <span>sso</span>
        {/* <Heading color={"white"}>PicAIsso</Heading> */}
        <Spacer />
        {isLogged ? (
          <Button
            className="button__logout"
            mt={1}
            h="30px"
            color="picAisso.text"
            backgroundColor={"picAisso.button.login"}
            type="submit"
            fontSize="1xl"
          >
            Logout
          </Button>
        ) : (
          <Button
            className="button__login"
            mt={1}
            h="30px"
            color="picAisso.text"
            backgroundColor={"picAisso.button.loginForm"}
            type="submit"
            fontSize="1xl"
          >
            Login
          </Button>
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
