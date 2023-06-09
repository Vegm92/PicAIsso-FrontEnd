import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/usersSlice/usersSlice";
import { CustomToast } from "../../modals/CustomToast";
import { UserCredentials, UserState } from "../../types/userTypes";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const { addToast } = CustomToast();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const usersEndpoint = "/users";
  const loginEndpoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
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

      const { email, id } = tokenPayload;
      const logginUser: UserState = {
        token,
        email,
        isLogged: false,
        id,
      };

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loginUserActionCreator(logginUser));
      addToast("Wellcome!", "Login successfull", "success");
      localStorage.setItem("token", token);
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
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
