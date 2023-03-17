import { Flex } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import useImages from "../../hooks/useImages/useImages";
import { ImageDataStructure } from "../../types/imagesTypes";
import DeleteButtonStyled from "./DeleteButtonStyled";

interface DeleteButtonProps {
  image: ImageDataStructure;
}

const DeleteButton = ({ image }: DeleteButtonProps): JSX.Element => {
  const { deleteImage } = useImages();

  return (
    <Flex gap="2">
      <DeleteButtonStyled
        aria-label="delete"
        type="button"
        onClick={() => deleteImage(image)}
      >
        <AiOutlineDelete color="black" className="delete__icon" />
        Delete
      </DeleteButtonStyled>
    </Flex>
  );
};

export default DeleteButton;
