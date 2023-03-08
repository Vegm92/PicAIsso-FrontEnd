import { useToast } from "@chakra-ui/react";

export const LoginSuccessModal = () => {
  const toast = useToast();
  return toast({
    title: "Login Successfull.",
    description: "You logged in successfully.",
    status: "success",
    duration: 9000,
    isClosable: true,
    position: "top",
  });
};

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

export const LogoutSuccessModal = () => {
  const toast = useToast();
  return toast({
    title: "Logout Successfull.",
    description: "You logged out successfully.",
    status: "info",
    duration: 9000,
    isClosable: true,
    position: "top",
  });
};
