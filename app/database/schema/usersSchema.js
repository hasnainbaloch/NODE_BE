import usersModel from "../models/usersModel.js";

const createUserSchema = async ({
  userName,
  firstName,
  lastName,
  phoneNumber,
  password,
}) =>
  usersModel.create({ userName, firstName, lastName, phoneNumber, password });

export { createUserSchema };
