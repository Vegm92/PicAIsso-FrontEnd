import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import { User } from "../../features/usersSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../features/usersSlice/usersSlice";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_URL_API;
  const usersEndpoint = "users/";
  const loginEndpoint = "login/";

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
      const { sub: id, username } = tokenPayload;
      const logginUser: User = {
        username,
        token,
        id,
      };
      dispatch(loginUserActionCreator(logginUser));

      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {}
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    navigate("login");
  };

  return { loginUser, logoutUser };
};

export default useUser;
