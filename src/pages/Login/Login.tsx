import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginStyled>
      <h1 className="login__tittle">Log in</h1>
      <Box as="header" className="login">
        <LoginForm />
      </Box>
    </LoginStyled>
  );
};

export default Login;
