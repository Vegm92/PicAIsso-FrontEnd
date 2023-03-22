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

import { useEffect, useState } from "react";
import imagesPrompt from "../../media/img/imagesObject";
import CreateFormStyled from "./CreateFormStyled";
import { FormCreateStructure } from "../../types/imagesTypes";
import useImages from "../../hooks/useImages/useImages";
import useApi from "../../hooks/useApi/useApi";

const CreateForm = (): JSX.Element => {
  const { createImage } = useImages();
  const { generateImage } = useApi();

  const [title, setTitle] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File>();

  useEffect(() => {
    setFinalPrompt(
      `Imaging: ${userPrompt},${category} style, and a description of ${description} `
    );
  }, [category, description, userPrompt]);

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

  const onGenerateHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setImage(await generateImage(finalPrompt));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newImage: FormCreateStructure = {
      title,
      userPrompt,
      image: image!,
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
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            className="input__title input"
            type="text"
            placeholder="The title of the image"
            value={title}
            autoComplete="off"
            aria-label="title"
            onChange={handleTitle}
          />
          <FormLabel htmlFor="prompt">Prompt</FormLabel>
          <Input
            className="input__prompt input"
            type="text"
            placeholder="Add a short prompt to feed the AI!"
            value={userPrompt}
            autoComplete="off"
            aria-label="prompt"
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
              ></Image>
            );
          })}
        </SimpleGrid>
        <div className="image-container">
          <Image
            boxSize={"280px"}
            src={
              image
                ? URL.createObjectURL(image)
                : "https://placehold.co/250x250/?text=Press-Generate"
            }
            className="generated-image"
            alt="ai image"
          ></Image>
        </div>

        <div className="button-group">
          <Button
            aria-label="generate"
            type="button"
            className="generate__button"
            variant="outline"
            color={"picAisso.button.text"}
            size={"lg"}
            backgroundColor={"picAisso.button.loginForm"}
            onClick={onGenerateHandler}
          >
            Generate
          </Button>
          <Button
            type="submit"
            className="submit__button"
            variant="outline"
            color={"picAisso.button.text"}
            size={"lg"}
            backgroundColor={"picAisso.button.loginForm"}
          >
            Save
          </Button>
        </div>
      </FormControl>
    </CreateFormStyled>
  );
};

export default CreateForm;
