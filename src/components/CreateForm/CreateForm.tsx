import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import imagesPrompt from "../../media/img/imagesObject";
import CreateFormStyled from "./CreateFormStyled";
import { FormCreateStructure } from "../../types/imagesTypes";
import useImages from "../../hooks/useImages/useImages";

const CreateForm = (): JSX.Element => {
  const { createImage } = useImages();

  const [title, setTitle] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const handleUserPrompt = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPrompt(value);
  };

  const handleDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(value);
  };

  const handleCategory = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newImage: FormCreateStructure = {
      title,
      userPrompt,
      image,
      description,
      category,
    };

    await createImage(newImage);
  };

  return (
    <CreateFormStyled
      className="create-form"
      onSubmit={onSubmitHandler}
      encType="multipart/form-data"
      method="post"
      action="/send-data-here"
      name="Create image form"
    >
      <FormControl isRequired className="create-form">
        <Heading color={"picAisso.text"} fontWeight="medium">
          Create an image from text prompt
        </Heading>

        <Stack className="create-form__inputs" spacing={3}>
          <FormLabel htmlFor="subject">Title</FormLabel>
          <Input
            className="input__title input"
            type="text"
            placeholder="The title of the image"
            value={title}
            autoComplete="off"
            aria-label="subject"
            onChange={handleTitle}
          />
          <FormLabel htmlFor="subject">Prompt</FormLabel>
          <Input
            className="input__prompt input"
            type="text"
            placeholder="Add a short prompt to feed the AI!"
            value={userPrompt}
            autoComplete="off"
            aria-label="subject"
            onChange={handleUserPrompt}
          />

          <label htmlFor="mood">Mood</label>
          <Select
            className="input__selector input"
            placeholder="Select Mood"
            id="mood"
            value={category}
            onChange={handleCategory}
          >
            <option value="Cheerful"> Cheerful 🌞</option>
            <option value="Eerie"> Eerie 👻</option>
            <option value="Retro"> Retro 🕰️ </option>
            <option value="Colorful"> Colorful 🌈</option>
          </Select>

          <label htmlFor="description">Description</label>
          <Textarea
            className="input__keywords input"
            placeholder="Add a short description of the image!"
            id="description"
            value={description}
            onChange={handleDescription}
          />
        </Stack>

        <label aria-label="category" htmlFor="category">
          Choose a style
        </label>
        <SimpleGrid
          w={"300px"}
          columns={3}
          spacingX="10px"
          spacingY="20px"
          justifyItems={"center"}
          className="category-container"
          margin="auto"
        >
          {Object.values(imagesPrompt).map((value, index) => {
            return (
              <Image
                aria-label="category"
                boxSize={"80px"}
                objectFit="cover"
                src={value}
                key={value}
                borderRadius={"10px"}
                id="category"
                placeholder={`image-category${index}`}
                border={category === value ? "5px solid orange" : "none"}
              ></Image>
            );
          })}
        </SimpleGrid>

        <div className="button-group">
          <Button
            type="submit"
            className="submit__button"
            variant="outline"
            color={"picAisso.button.text"}
            backgroundColor={"picAisso.button.loginForm"}
          >
            Submit
          </Button>
          <Button
            type="button"
            className="generate__button"
            variant="outline"
            color={"picAisso.button.text"}
            backgroundColor={"picAisso.button.loginForm"}
          >
            Generate
          </Button>
        </div>
      </FormControl>
    </CreateFormStyled>
  );
};

export default CreateForm;
