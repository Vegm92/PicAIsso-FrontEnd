import { rest } from "msw";
import { mockImages } from "./imageMock";

const routes = {
  user: "/users",
  login: "/login",
  images: "/picaisso",
  getImages: "/images",
};

const apiUrl = process.env.REACT_APP_URL_API!;

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({ token: "mockedToken" })
    );
  }),

  rest.get(
    `${apiUrl}${routes.images}${routes.getImages}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockImages))
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${routes.images}${routes.getImages}`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
