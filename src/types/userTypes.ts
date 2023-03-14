export interface User {
  id: string;
  email: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  id: string;
  email: string;
  password: string;
}
