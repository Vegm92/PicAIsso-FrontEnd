import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types/userTypes";
import { LoginFormStyled } from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialLoginState: UserCredentials = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialLoginState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({ ...input, [event.target.id]: event.target.value });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await loginUser(input);
    setInput(initialLoginState);
  };

  const isError = input.email === "" || input.password === "";
  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <Box>
        <Text
          as={"p"}
          className="login-form__tittle"
          fontWeight={"medium"}
          fontSize={"2xl"}
        >
          Login to PicAIsso
        </Text>
        <FormControl isInvalid={isError} fontSize={"small"}>
          <FormLabel className="label__email"></FormLabel>
          <Input
            className="input__email"
            type="email"
            id="email"
            autoFocus
            placeholder="Email"
            onChange={handleChange}
            value={input.email}
            isRequired
          />

          <FormLabel className="label__password"></FormLabel>
          <Input
            className="input__password"
            placeholder="Password"
            type="password"
            id="password"
            onChange={handleChange}
            value={input.password}
          ></Input>

          <Flex direction={"column"} w={"auto"}>
            <Button
              className="button__login"
              mt={1}
              h="35px"
              color="picAisso.buttons.text"
              backgroundColor={"picAisso.button.loginForm"}
              type="submit"
              fontSize="2xl"
            >
              Login
            </Button>

            <Text mt={4}>
              Forgot your password?{" "}
              <Link href="/login" color={"picAisso.textLink1"}>
                Click here
              </Link>
            </Text>
            <Text>
              Don't have an account yet?{" "}
              <Link href="/login" color={"picAisso.textLink2"}>
                Sign up here
              </Link>
            </Text>
          </Flex>
        </FormControl>
      </Box>
    </LoginFormStyled>
  );
};

export default LoginForm;
