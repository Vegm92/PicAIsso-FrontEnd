import { Box, Divider, Heading, HStack, Image } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { ImageDataStructure } from "../../types/imagesTypes";
import CardStyled from "./CardStyled";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";
import endpoints from "../../routers/types";

interface CardProps {
  image: ImageDataStructure;
}

const Card = ({ image }: CardProps): JSX.Element => {
  const categories = image.category.split(",");

  return (
    <CardStyled className="card">
      <Heading className="card__title" size="md">
        {image.title}
      </Heading>
      <Link to={`${endpoints.detail}/${image.id}`}>
        <Image
          boxSize={"285px"}
          objectFit="cover"
          src={image.image}
          alt={image.title}
          className="card__image"
          borderRadius="lg"
        />
      </Link>

      <HStack>
        <Box as="ul" className="card__category">
          {categories.map((tag) => (
            <li key={uuid()} className="card__category-tag">
              {tag}
            </li>
          ))}
        </Box>
      </HStack>

      <div className="my-collection__buttons buttons">
        <DeleteButton image={image}></DeleteButton>
      </div>
      <Divider />
    </CardStyled>
  );
};

export default Card;
