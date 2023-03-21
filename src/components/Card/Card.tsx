import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImageDataStructure } from "../../types/imagesTypes";
import CardStyled from "./CardStyled";
import { useAppSelector } from "../../store/hooks";
import DeleteButton from "../DeleteButton/DeleteButton";

interface CardProps {
  image: ImageDataStructure;
}

const Card = ({ image }: CardProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const isInMyCollection = image.promptedBy === id;
  const categories = image.category.split(",");

  return (
    <CardStyled className="card">
      <Heading className="card__title" size="md">
        {image.title}
      </Heading>
      <Image
        boxSize={"90%"}
        objectFit="cover"
        src={image.image}
        alt={image.title}
        className="card__image"
        borderRadius="lg"
      />
      <HStack>
        <Box as="ul" className="card__category">
          {categories.map((tag) => (
            <li key={uuid()} className="card__category-tag">
              {tag}
            </li>
          ))}
        </Box>
      </HStack>
      <Stack mt="1" spacing="3" className="card__info info">
        <Text className="info__description">{image.description}</Text>
        <Text
          className="info__prompt"
          color={"picAisso.textLink1"}
          fontSize="1xl"
          fontStyle={"italic"}
        >
          prompt: {image.userPrompt}
        </Text>
      </Stack>
      <div className="my-collection__buttons buttons">
        {isInMyCollection ? (
          <DeleteButton image={image}></DeleteButton>
        ) : (
          <Button
            className="buttons__add"
            mt={1}
            h="35px"
            color="black"
            backgroundColor={"picAisso.button.loginForm"}
            type="button"
            fontSize="2xl"
            leftIcon={
              <AiOutlineAppstoreAdd color="black" className="fav__icon" />
            }
          >
            Add
          </Button>
        )}
      </div>
      <Divider />
    </CardStyled>
  );
};

export default Card;
