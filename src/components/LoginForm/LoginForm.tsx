import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/features/users/usersSlice/types";
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
      <Box maxW={"500px"} fontSize="2xl">
        <Text
          className="login-form__tittle"
          fontWeight={"medium"}
          fontSize={"5xl"}
        >
          Login to PicAIsso
        </Text>
        <FormControl isInvalid={isError} mt="40px" fontSize={"large"}>
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
            type={"password"}
            size="lg"
            onChange={handleChange}
          ></Input>

          <Flex direction={"column"}>
            <Button
              className="button__login"
              mt={4}
              h="80px"
              color="picAisso.text"
              backgroundColor={"picAisso.button.loginForm"}
              type="submit"
              fontSize="4xl"
            >
              Login
            </Button>

            <Text mt={4}>
              Forgot your password?{" "}
              <Link color={"picAisso.textLink1"}>Click here</Link>
            </Text>
            <Text>
              Don't have an account yet?{" "}
              <Link color={"picAisso.textLink2"}>Sign up here</Link>
            </Text>
          </Flex>
        </FormControl>
      </Box>
    </LoginFormStyled>
  );
};

export default LoginForm;
