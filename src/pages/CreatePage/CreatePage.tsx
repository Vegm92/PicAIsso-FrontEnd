import { Heading } from "@chakra-ui/layout";
import CreateForm from "../../components/CreateForm/CreateForm";

const CreatePage = (): JSX.Element => {
  return (
    <>
      <Heading>Text To Image - AI Image Generator API</Heading>
      <CreateForm></CreateForm>
    </>
  );
};

export default CreatePage;
