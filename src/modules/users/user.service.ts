import { User } from "../../models/user.model";

class UserService {
  
  userModel: any;
  constructor(userModel: any) {
    this.userModel = userModel;
  }
  create = async (user: User): Promise<any> => {
    const IModel = new this.userModel(user);
    const hasError = IModel.validateSync();
    if (hasError) {
      throw new Error(hasError.message);
    } else {
      return await IModel.save();
    }
  };

  find = async (usr: User): Promise<any> => {
    const user = await this.userModel.find(usr).exec();
    console.log(user);
    return user;
  };
}
export { UserService };
