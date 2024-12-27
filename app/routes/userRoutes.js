import express from "express";
import { welcomeRoute, signupRoute } from "../controllers/usersController.js";

const router = express.Router();

router.get("/welcome", welcomeRoute);
router.post("/", signupRoute);

export default router;
