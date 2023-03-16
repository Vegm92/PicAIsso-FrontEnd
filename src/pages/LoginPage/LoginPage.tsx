import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginStyled from "./LoginPageStyled";

const Login = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginStyled>
      <Box as="header" className="login">
        <LoginForm />
      </Box>
    </LoginStyled>
  );
};

export default Login;
