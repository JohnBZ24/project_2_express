import userModel from "./user.model.js";
import pkg from "jsonwebtoken";
const { sign } = pkg;

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

  static async login(email, password) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error(" emailak mch mawjoud aal database ya dayous ");
    }
    if (password != user.password) {
      throw new Error(" sadi2e passwordak  dayous ");
    }
    const token = await this.signJwt({ _id: user._id });
    console.log(token);
    return {
      user: { firstName: user.firstName, lastName: user.lastName },
      token,
    };
  }

  static async findUserByEmail(email) {
    return userModel.findOne({ email });
  }
  static async signJwt(userPayload) {
    return sign(userPayload, "mySecretKey", { expiresIn: "1h" });
  }
}

export default UserService;
