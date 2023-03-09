import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UseUserStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/usersSlice/usersSlice";
import {
  UserCredentials,
  UserState,
} from "../../store/features/users/usersSlice/types";

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();

  const apiUrl = process.env.REACT_APP_API_URL;
  const usersEndpoint = "/users";
  const loginEndpoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}${usersEndpoint}${loginEndpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-Type": "application/json" },
    });

    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { username } = tokenPayload;
    const logginUser: UserState = { token, username, isLogged: false };

    dispatch(loginUserActionCreator(logginUser));

    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser };
};

export default useUser;
