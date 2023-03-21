import { rest } from "msw";
import { imageMock } from "./imageMock";

const apiUrl = process.env.REACT_APP_URL_API!;
const apiUrlGenerateImage = process.env.REACT_APP_URL_API_OPENAI!;

const routes = {
  user: "/users",
  login: "/login",
  images: "/images",
  getImages: "/",
  myImages: "/my-images",
  deleteImage: "/delete/",
  createImage: "/create",
  generateImage: "/generations",
  id: "qwert1234",
};

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({ token: "mockedToken" })
    );
  }),

  rest.get(
    `${apiUrl}${routes.images}${routes.getImages}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(imageMock))
  ),

  rest.delete(
    `${apiUrl}${routes.images}${routes.deleteImage}${routes.id}`,
    (req, res, ctx) => res(ctx.status(200))
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${routes.images}${routes.getImages}`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.get(
    `${apiUrlGenerateImage}${routes.images}${routes.generateImage}`,
    (req, res, ctx) => res(ctx.status(404))
  ),

  rest.delete(
    `${apiUrl}${routes.images}${routes.deleteImage}${routes.id}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
];
