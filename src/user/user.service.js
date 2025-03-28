import userModel from "./user.model.js";

class UserService {
  static async createUser(email, firstName, lastName, password) {
    await new userModel({
      email,
      firstName,
      lastName,
      password,
    }).save();
  }

  static async findUserbyId(userId) {
    const user = await userModel.findOne({ _id: userId });
    return user;
  }

  static async findAll() {
    const users = await userModel.find();
    return users;
  }

  static async deleteUser(userId) {
    const deluser = await userModel.deleteOne({ _id: userId });
    return deluser;
  }
  static async deleteUsers(firstName) {
    const delusers = await userModel.deleteMany({ firstName });
    return delusers;
  }
}

export default UserService;
