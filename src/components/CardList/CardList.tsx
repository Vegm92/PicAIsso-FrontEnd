import { useEffect } from "react";
import useImages from "../../hooks/useImages/useImages";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { getImages } = useImages();

  useEffect(() => {
    getImages();
  }, [getImages]);

  const images = useAppSelector((state) => state.image.images);

  return (
    <CardListStyled>
      {images?.map((image) => (
        <li key={image.id}>
          <Card image={image} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
