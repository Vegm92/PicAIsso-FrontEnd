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
    <DeleteButtonStyled
      aria-label="delete"
      type="button"
      onClick={() => deleteImage(image)}
    >
      <AiOutlineDelete color="white" className="delete__icon" />
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
