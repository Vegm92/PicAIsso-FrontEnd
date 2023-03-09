import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LoginFormStyled } from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const isError = input === "";

  return (
    <LoginFormStyled className="login-form">
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
            placeholder="Email"
            value={input}
            onChange={handleInputChange}
          />

          <FormLabel className="label__password"></FormLabel>
          <Input
            className="input__password"
            placeholder="Password"
            type={"password"}
            size="lg"
            id={"field-:r2:"}
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
