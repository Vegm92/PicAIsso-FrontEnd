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
