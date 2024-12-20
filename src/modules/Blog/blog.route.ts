import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";

const blogRoute = Router();

blogRoute.post("/", auth(USER_ROLE.user), BlogControllers.createBlog);

export default blogRoute;
