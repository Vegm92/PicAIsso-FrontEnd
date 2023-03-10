import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UseUserStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/usersSlice/usersSlice";
import { CustomToast } from "../../modals/CustomToast";
import {
  UserCredentials,
  UserState,
} from "../../store/features/users/usersSlice/types";

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const { addToast } = CustomToast();

  const apiUrl = process.env.REACT_APP_API_URL!;
  const usersEndpoint = "/users";
  const loginEndpoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username } = tokenPayload;
      const logginUser: UserState = { token, username, isLogged: false };

      dispatch(loginUserActionCreator(logginUser));

      localStorage.setItem("token", token);
    } catch {
      addToast(
        "Invalid credentials",
        "There was something wrong with your login",
        "error"
      );
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser };
};

export default useUser;
