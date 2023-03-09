import { useToast } from "@chakra-ui/react";

export const LoginErrorModal = () => {
  const toast = useToast();
  return toast({
    title: "Login Error.",
    description: "There was a mistake in your login attempt.",
    status: "error",
    duration: 9000,
    isClosable: true,
    position: "top",
  });
};
