import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, id } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ id, token, email: username }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
