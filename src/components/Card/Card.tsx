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
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImageDataStructure } from "../../types/imagesTypes";
import CardStyled from "./CardStyled";

interface CardProps {
  image: ImageDataStructure;
}

const Card = ({ image }: CardProps): JSX.Element => {
  return (
    <CardStyled className="card">
      <Heading className="card__title" size="md">
        {image.title}
      </Heading>
      <Image
        src={image.image}
        alt={image.title}
        className="card__image"
        borderRadius="lg"
      />
      <HStack>
        <Box className="card__category">{image.category}</Box>
      </HStack>
      <Stack mt="1" spacing="3" className="card__info info">
        <Text className="info__description">{image.description}</Text>
        <Text
          className="info__prompt"
          color={"picAisso.textLink1"}
          fontSize="1xl"
          fontStyle={"italic"}
        >
          {`"${image.prompt}"`}
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
