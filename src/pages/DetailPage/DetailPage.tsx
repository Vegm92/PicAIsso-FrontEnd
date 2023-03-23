import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import useImages from "../../hooks/useImages/useImages";
import { useAppSelector } from "../../store/hooks";

const DetailPage = (): JSX.Element => {
  const { getImageById } = useImages();

  const { image: detailImage } = useAppSelector((state) => state.image);

  let { id } = useParams();

  useEffect(() => {
    getImageById(id!);
  }, [getImageById, id]);

  return <CardDetail image={detailImage} />;
};

export default DetailPage;
