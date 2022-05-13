import  {  UserModel, User } from "../../models/user.model";
class UserService {
  /**
   *
   */
  constructor() { }
  create = async (user: User): Promise<any> => {
    const IModel = new UserModel(user);
    const hasError = IModel.validateSync();
    if (hasError) {
     throw new Error(hasError.message)
    } else {
     return await IModel.save();
    }
  };

  find = async (usr: User): Promise<any> => {
    const user = await UserModel.find(usr).exec();
    console.log(user);
    return user
  };

}
export {UserService};
