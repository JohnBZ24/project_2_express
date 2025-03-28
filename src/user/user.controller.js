import userService from "./user.service.js";
class UserController {
  static async signup(req, res) {
    try {
      const { email, firstName, lastName, password } = req.body;
      let user = await userService.createUser(
        email,
        firstName,
        lastName,
        password
      );
      console.log("barodu");
      res.status(200).json({ user, message: " user added succesfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.findUserbyId(userId);
      res.status(200).json({ user, message: "user fetched succesfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async GetAll(req, res) {
    try {
      const users = await userService.findAll();
      res.status(200).json({ users, message: "all found" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteUser(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.deleteUser(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteUsers(req, res) {
    try {
      const { firstName } = req.body;
      const users = await userService.deleteUsers(firstName);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async Login(req, res) {
    try {
      const { email, password } = req.body;
      if (password != undefined && email != undefined) {
        let user = await userService.login(email, password);
        res
          .status(200)
          .json({ user, message: "Logged in to existing user successfully" });
      } else {
        throw new Error(
          "Missing required fields or wrong email or wrong email"
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
export default UserController;
