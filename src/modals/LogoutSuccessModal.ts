import { useToast } from "@chakra-ui/react";

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
