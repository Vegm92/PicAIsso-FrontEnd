import decodeToken from "jwt-decode";
import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import useUser from "./useUser";
import { CustomTokenPayload } from "./types";
import { loginUserActionCreator } from "../../store/features/users/usersSlice/usersSlice";
import { server } from "../../mocks/server";
import {
  UserCredentials,
  UserState,
} from "../../store/features/users/usersSlice/types";

beforeAll(() => {
  jest.clearAllMocks();
  server.listen();
});

afterAll(() => {
  server.close();
  jest.clearAllMocks();
});

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

const userCredentials: UserCredentials = {
  email: "victor@gmail.com",
  password: "patatafrita",
};

const mockTokenPayload: CustomTokenPayload = {
  id: "qwerty12345",
  email: "victor@gmail.com",
  username: "victor",
};

const mockToken = "mockedToken";

describe("Given a useUser custom Hook", () => {
  describe("When its loginUser function is called with the email 'victor@gmail.com' and the password 'patatasfritas'", () => {
    test("Then it should call the dispatch with the loginUser Action creator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockedUser: UserState = {
        token: mockToken,
        username: mockTokenPayload.username,
        isLogged: false,
      };

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockedUser)
      );
    });
  });
});
