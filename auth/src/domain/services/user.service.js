import { User } from "../model/user.js";
import { ErrorHandler } from "../../utils/error.js";

export class UserServiceLayer {
  async createUser(data) {
    const { firstname, lastname, email, password } = data;
    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    if (!createdUser) return ErrorHandler("Registration failed try again", 500);
    return "Registration was successful!";
  }

  async loginUser(data) {
    const { email, password } = data;
  }
}
