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

interface CardProps {
  image: ImageDataStructure;
}

const Card = ({
  image: { category, description, image, prompt, title },
}: CardProps): JSX.Element => {
  const categories = category.split(",");

  return (
    <CardStyled className="card">
      <Heading className="card__title" size="md">
        {title}
      </Heading>
      <Image
        src={image}
        alt={title}
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
        <Text className="info__description">{description}</Text>
        <Text
          className="info__prompt"
          color={"picAisso.textLink1"}
          fontSize="1xl"
          fontStyle={"italic"}
        >
          prompt: {prompt}
        </Text>
      </Stack>
      <Divider />
      <Button
        className="button__add"
        mt={1}
        h="35px"
        color="picAisso.text"
        backgroundColor={"picAisso.button.loginForm"}
        type="button"
        fontSize="2xl"
        leftIcon={<AiOutlineAppstoreAdd color="white" className="fav__icon" />}
      >
        Add
      </Button>
    </CardStyled>
  );
};

export default Card;
