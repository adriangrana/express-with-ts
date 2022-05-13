import { UserModel } from "../../../src/models/user.model";
import {UserService} from "./user.service";
const mockingoose = require("mockingoose");
describe("UserService", () => {
  it("should return an user when find an user by email", async () => {
    const expected = {
      name: "adrian",
      email: "adriangrana@gmail.com",
    };
    mockingoose(UserModel).toReturn([
      {
        _id: "5d7b9f9f9f9f9f9f9f9f9f9",
        ...expected,
      },
    ]);
    const filter = {
      name: "adrian",
    };
    const userService = new UserService();
    const result = await userService.find(filter);
    expect(result).toEqual([expected]);
  });
});
