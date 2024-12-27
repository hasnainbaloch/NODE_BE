import { createUserSchema } from "../database/schema/usersSchema.js";

const registerUserService = async (userData) => {
  try {
    const user = await createUserSchema(userData);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { registerUserService };
