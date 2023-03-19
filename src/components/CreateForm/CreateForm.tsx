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
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import imagesPrompt from "../../media/img/imagesObject";
import CreateFormStyled from "./CreateFormStyled";
import { FormCreateStructure } from "../../types/imagesTypes";
import useImages from "../../hooks/useImages/useImages";

const CreateForm = (): JSX.Element => {
  const { createImage } = useImages();

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [actionDepicted, setActionDepicted] = useState("");
  const [mood, setMood] = useState("");
  const [category, setCategory] = useState("");
  // const [image] = useState<File | string>("");

  const handleSubject = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(value);
  };

  const handleDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(value);
  };

  const handleActionDepicted = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setActionDepicted(value);
  };

  const handleMood = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(value);
  };

  const handleCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  // const handleImage = ({
  //   target: { files },
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   if (files !== null) {
  //     setImage(files[0]);
  //   }
  // };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newImage: FormCreateStructure = {
      subject,
      description,
      actionDepicted,
      category,
      mood,
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
      <FormControl isRequired className="create-form__subject">
        <Heading color={"picAisso.text"} fontWeight="medium">
          Create an image from text prompt
        </Heading>

        <Stack className="create-form__inputs" spacing={3}>
          <label htmlFor="subject">Subject</label>
          <Input
            className="input__subject input"
            type="text"
            placeholder="The main focus of the image"
            id="subject"
            autoComplete="off"
            onChange={handleSubject}
          />

          <label htmlFor="mood">Mood</label>
          <Select
            className="input__selector input"
            placeholder="Select Mood"
            id="mood"
            onChange={handleMood}
          >
            <option value="Cheerful"> Cheerful 🌞</option>
            <option value="Eerie"> Eerie 👻</option>
            <option value="Retro"> Retro 🕰️ </option>
            <option value="Colorful"> Colorful 🌈</option>
          </Select>

          <label htmlFor="actionDepicted">Action</label>
          <Input
            className="input__action input"
            type="text"
            placeholder="What is going on in you image?"
            id="actionDepicted"
            autoComplete="off"
            onChange={handleActionDepicted}
          />

          <label htmlFor="description">Description</label>
          <Textarea
            className="input__keywords input"
            placeholder="Add a short description to feed the AI!"
            id="description"
            onChange={handleDescription}
          />
        </Stack>

        <label htmlFor="category">Choose a style</label>
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
                boxSize={"80px"}
                objectFit="cover"
                src={value}
                key={index}
                borderRadius={"10px"}
                id="category"
                placeholder={`image-category${index}`}
                onClick={() => handleCategory(value)}
                border={category === value ? "5px solid orange" : "none"}
              ></Image>
            );
          })}
        </SimpleGrid>

        <div className="submit">
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
