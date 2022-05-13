import { ModelOptions, prop, getModelForClass, Severity } from "@typegoose/typegoose";
@ModelOptions({ options: { customName: "users", allowMixed:Severity.ALLOW } })
class User {
  @prop({required: true})
  name?:string;

  @prop({required: true})
  email?:string;

}
const UserModel = getModelForClass(User,{
  schemaOptions: {
    autoCreate: false,
    collection: "users",
    timestamps: true,
   
  }
});

export {UserModel, User };
  
