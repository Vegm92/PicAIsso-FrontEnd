import decodeToken from "jwt-decode";
import { renderHook, waitFor } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import useUser from "./useUser";
import { CustomTokenPayload } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/usersSlice/usersSlice";
import { User, UserCredentials, UserState } from "../../types/userTypes";
import { store } from "../../store";

beforeAll(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

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

const mockUserLogin: User = {
  email: mockTokenPayload.email,
  id: mockTokenPayload.id,
  token: mockToken,
};

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
        email: mockTokenPayload.email,
        isLogged: false,
        id: mockTokenPayload.id,
      };

      await waitFor(() => loginUser(userCredentials));

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockedUser));
    });

    test("Then it should call the addToast function", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spy).not.toHaveBeenCalledWith(
        loginUserActionCreator(mockUserLogin)
      );
    });
  });

  describe("When the logoutUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await logoutUser();

      expect(spy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
