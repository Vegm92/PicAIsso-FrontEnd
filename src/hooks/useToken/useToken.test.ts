import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import useToken from "./useToken";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import decodeToken from "jwt-decode";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  username: "victor",
  email: "victor@gmail.com",
  id: "12345678",
};

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then it should call the dispatch", () => {
      const mockToken = "qwerty123456";
      localStorage.setItem("token", mockToken);

      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).toHaveBeenCalled();

      localStorage.clear();
    });

    test("Then it should remove token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("When its getToken function is called but the ir no token", () => {
    test("Then it should not call loginUserActionCreator", () => {
      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
