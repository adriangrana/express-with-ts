import { UserModel } from "../../../src/models/user.model";
import { UserService } from "./user.service";
import mockingoose from "mockingoose";
describe("UserService", () => {
  let userService: UserService;
  const expected = {
    name: "adrian",
    email: "adriangrana@gmail.com",
  };
  beforeAll(() => {
    mockingoose.resetAll();
  });
  it("should return an user when find an user by email", async () => {
    function finderMock(query) {
          expect(query.getQuery()).toMatchSnapshot('find query');

          if (query.getQuery()._id === '507f191e810c19729de860ea') {
              return expected;
          }
      }
    mockingoose(UserModel).toReturn(finderMock, 'find');
    const filter = {
      name: "adrian"
    };
    userService = new UserService(UserModel);
    const result = await userService.find(filter);
    expect(result).toEqual([expected]);
    expect(true).toBe(true);
  });
});
