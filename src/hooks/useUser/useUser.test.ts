import decodeToken from "jwt-decode";
import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import useUser from "./useUser";
import { CustomTokenPayload, UserCredentials } from "./types";
import { store } from "../../store/store";
import { User } from "../../store/features/users/usersSlice/types";
import { loginUserActionCreator } from "../../store/features/users/usersSlice/usersSlice";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

const userCredentials: UserCredentials = {
  username: "victor",
  password: "patatafrita",
};

const mockTokenPayload: CustomTokenPayload = {
  id: "qwerty12345",
  username: "victor",
};

const mockToken = "qwerty12345victorgranda";

describe("Given a useUser custom Hook", () => {
  describe("When its loginUser function is called", () => {
    test("Then it should call the dispatch with the loginUser Action creator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockLoginUser: User = {
        id: mockTokenPayload.id,
        token: mockToken,
        username: mockTokenPayload.username,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLoginUser));
    });
  });
});
