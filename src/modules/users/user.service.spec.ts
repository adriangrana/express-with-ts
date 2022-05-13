import UserService from "./user.service";

describe('UserService', () => {
 
    it('should return an user when find an user by email', async () => {
        const expected = {
            email: "adriangrana@gmail.com"
        };
        const userService = new UserService();
        const result = await userService.find(expected);
        expect(result).toEqual([expected]);
    });
});
