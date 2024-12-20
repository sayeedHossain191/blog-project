import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (payload: TBlog): Promise<TBlog> => {
  //payload.role = "admin";
  const result = await Blog.create(payload);

  return result;
};

export const BlogServices = {
  createBlog,
};
