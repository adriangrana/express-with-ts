import  {  UserModel, User } from "../../models/user.model";
class UserService {
  create = async (user: User): Promise<any> => {
    const IModel = new UserModel(user);
    const hasError = IModel.validateSync();
    if (hasError) {
     throw new Error(hasError.message)
    } else {
     return await IModel.save();
    }
  };

  find = async (user: User): Promise<Array<User>> => {
    return await UserModel.findOne({name:"adrian"});
  };

  findAll = async (email: string): Promise<Array<User>> => {
    return await UserModel.find({});
  };

  update = async (user: User): Promise<any> => {
    return await UserModel.updateOne(user);
  };
  del = async (user: User): Promise<any> => {
    return await UserModel.deleteOne(user);
  };
}
export default UserService;
