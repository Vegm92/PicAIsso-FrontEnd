import { Heading, Text } from "@chakra-ui/react";
import CardList from "../../components/CardList/CardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="hero-section">
      <Heading className="hero-section__header header" m={3} size={"xl"}>
        Experience the beauty of AI-generated art that transcends human
        creativity
      </Heading>
      <Text className="hero-section__subheading" m={3} fontSize={"2xl"}>
        Discover a new form of expression that pushes the boundaries of
        imagination
      </Text>
      <CardList />
    </HomePageStyled>
  );
};

export default HomePage;
