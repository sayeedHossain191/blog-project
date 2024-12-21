import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";
import { BlogControllers } from "./blog.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";

const blogRoute = Router();

blogRoute.post(
  "/",
  auth(USER_ROLE.user),
  validateRequest(blogValidation.blogValidationSchema),
  BlogControllers.createBlog
);

blogRoute.patch(
  "/:id",
  auth(USER_ROLE.user),
  validateRequest(blogValidation.blogValidationSchema),
  BlogControllers.updateBlog
);

blogRoute.delete(
  "/:id",
  auth(USER_ROLE.user),
  validateRequest(blogValidation.blogValidationSchema),
  BlogControllers.deleteBlog
);

blogRoute.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogControllers.getAllBlogs
);

export default blogRoute;
