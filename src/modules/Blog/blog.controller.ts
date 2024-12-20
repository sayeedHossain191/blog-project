import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  //const payload = req.body;
  const userId = req.user._id; // Extract user ID from decoded token in `auth` middleware
  const payload = { ...req.body, author: userId };
  const result = await BlogServices.createBlog(payload);

  // res.json({
  //   status: true,
  //   message: 'User created successfully',
  //   data: result,
  // })

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Blog created successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
};
