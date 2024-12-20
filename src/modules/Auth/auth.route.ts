import { Router } from "express";
import { AuthValidation } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "../User/user.validation";

const authRoute = Router();

authRoute.post(
  "/register",
  validateRequest(UserValidation.userValidationSchema),
  AuthControllers.register
);
authRoute.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.login
);

export default authRoute;
