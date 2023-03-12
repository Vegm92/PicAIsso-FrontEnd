import { JwtPayload } from "jwt-decode";
import { UserCredentials } from "../../types/userTypes";

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  email: string;
  username: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}
