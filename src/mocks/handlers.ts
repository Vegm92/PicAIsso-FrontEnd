import { rest } from "msw";
const apiUrl = process.env.REACT_APP_URL_API!;
const apiUrlGenerateImage = process.env.REACT_APP_URL_API_OPENAI!;

const routes = {
  user: "/users",
  login: "/login",
  images: "/images",
  getImages: "/",
  myImages: "/my-images",
  deleteImage: "/delete",
  createImage: "/create",
  detail: "/detail",
  generateImage: "/generations",
  id: "/qwert12345",
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
    async (req, res, ctx) => res(ctx.status(200), ctx.json({ images: [] }))
  ),

  rest.post(
    `${apiUrlGenerateImage}${routes.images}${routes.generateImage}`,
    (req, res, ctx) => res(ctx.status(201), ctx.json({ token: "mockedToken" }))
  ),

  rest.delete(
    `${apiUrl}${routes.images}${routes.deleteImage}${routes.id}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ deleted: "qwert12345" }))
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${routes.images}${routes.getImages}`, (req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}${routes.images}${routes.deleteImage}${routes.id}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
];

export const getByIDError = [
  rest.get(
    `${apiUrl}${routes.images}${routes.detail}${routes.id}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Image not found",
        })
      );
    }
  ),
];

export const getById = [
  rest.get(
    `${apiUrl}${routes.images}${routes.detail}${routes.id}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
];
