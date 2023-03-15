import { Box as Flex, Heading, Text } from "@chakra-ui/react";
import CardList from "../../components/CardList/CardList";

const HomePage = (): JSX.Element => {
  return (
    <Flex as="section" alignItems={"center"}>
      <Heading>
        Experience the beauty of AI-generated art that transcends human
        creativity
      </Heading>
      <Text>
        Discover a new form of expression that pushes the boundaries of
        imagination
      </Text>
      <CardList />
    </Flex>
  );
};

export default HomePage;
