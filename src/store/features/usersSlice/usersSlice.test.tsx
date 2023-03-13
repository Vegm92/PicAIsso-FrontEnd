import { UserState, User } from "../../../types/userTypes";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./usersSlice";

const initialUserState: UserState = {
  id: "",
  email: "",
  token: "",
  isLogged: false,
};

describe("Given a userReducer", () => {
  describe("When it receives an initial state and an action to login the user", () => {
    test("Then it should return the user with its isLogged property set to true", () => {
      const testUser: User = {
        id: "1234qwer",
        email: "Victor",
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

  describe("When it receives an initial State and the action to logout the user", () => {
    test("Then it should return the users initial state, with isLogged set to false", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialUserState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialUserState);
    });
  });
});
