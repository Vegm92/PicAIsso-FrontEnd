import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./usersSlice";

const initialUserState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

describe("Given a userReducer", () => {
  describe("When it receives the action to login the user", () => {
    test("Then it should return the user with its isLogged property set to true", () => {
      const testUser: User = {
        username: "Victor",
        id: "123456qwerty",
        token: "qwerty123456",
      };
      const expectedUserState: UserState = {
        ...testUser,
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(testUser);

      const newUserState = userReducer(initialUserState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives the action to logout the user", () => {
    test("Then it should return the users initial state", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialUserState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialUserState);
    });
  });
});
