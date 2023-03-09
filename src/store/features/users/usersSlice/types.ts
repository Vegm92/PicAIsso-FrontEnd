export interface User {
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
