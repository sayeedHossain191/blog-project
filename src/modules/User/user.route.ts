import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";
import { UserValidation } from "./user.validation";
import { userController } from "./user.controller";

const userRoute = Router();

userRoute.post(
  "/create-admin",
  validateRequest(UserValidation.userValidationSchema),
  userController.createUser
);
userRoute.get("/:userId", userController.getSingleUser);
userRoute.put("/:userId", userController.updateUser);
userRoute.delete("/:userId", userController.deleteUser);
userRoute.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  userController.getUser
);

export default userRoute;
