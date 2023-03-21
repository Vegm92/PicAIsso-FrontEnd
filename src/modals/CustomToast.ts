import { useToast } from "@chakra-ui/toast";

export const CustomToast = () => {
  const toast = useToast();

  const addToast = (
    title: string,
    description: string,
    status: "info" | "warning" | "success" | "error" | "loading" | undefined,
    position?: "top" | "bottom",
    duration?: 5000,
    isClosable?: true
  ) => {
    toast({
      title,
      description,
      status,
      position,
      duration,
      isClosable,
    });
  };

  return { addToast };
};
