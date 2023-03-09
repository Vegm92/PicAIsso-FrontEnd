import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import { User } from "../../store/features/users/usersSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/usersSlice/usersSlice";
import { LoginErrorModal } from "../../modals/LoginErrorModal";
import { LoginSuccessModal } from "../../modals/LoginSuccessModal";
import { LogoutSuccessModal } from "../../modals/LogoutSuccessModal";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();

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

      const { id, username } = tokenPayload;

      const logginUser: User = {
        username,
        token,
        id,
      };
      dispatch(loginUserActionCreator(logginUser));

      localStorage.setItem("token", token);

      LoginSuccessModal();
    } catch (error) {
      LoginErrorModal();
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    LogoutSuccessModal();
  };

  return { loginUser, logoutUser };
};

export default useUser;
