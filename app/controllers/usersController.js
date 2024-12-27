import { registerUserService } from "../services/usersService.js";

const welcomeRoute = async (req, res, next) => {
  return res.status(200).json("Salam and Welcome!");
};

const signupRoute = async (req, res, next) => {
  const { userName, password, firstName, lastName } = req.body;

  if ((!userName, !password, !firstName, !lastName)) {
    return null;
  }

  try {
    const account = await registerUserService(req.body);
    res.status(201).json({
      message: "Your account has been registered!",
      data: account,
    });
  } catch (error) {
    console.log(error);
  }
};

export { welcomeRoute, signupRoute };
