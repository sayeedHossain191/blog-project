import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;
  //   const userId = req.user._id; // Extract user ID from decoded token in `auth` middleware
  //   const payload = { ...req.body, author: userId };
  const result = await BlogServices.createBlog(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Blog created successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await BlogServices.updateBlog(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  await BlogServices.deleteBlog(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blog deleted successfully",
    data: {},
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blogs fetched successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
