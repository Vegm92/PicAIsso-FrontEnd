import { Button, Divider, Link, Flex, Spacer } from "@chakra-ui/react";
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
          <Link className="link__Home">Home</Link>
          <Link className="link__Create">Create</Link>
          <Link className="link__MyCollection">My Collection</Link>
        </nav>
      ) : (
        <nav className="main-header__navigation">
          <Link className="link__Home">Home</Link>
          <Link className="link__Create">Create</Link>
        </nav>
      )}
    </HeaderStyled>
  );
};

export default Header;
