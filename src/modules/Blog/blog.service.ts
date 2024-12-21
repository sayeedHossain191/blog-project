import QueryBuilder from "../../builder/querybuilder";
import { BlogSearchableFields } from "./blog.constant";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (payload: TBlog): Promise<TBlog> => {
  //payload.role = "user";
  const result = await Blog.create(payload);

  return result;
};

const updateBlog = async (id: string, data: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Blog.find(),
    // .populate('preRequisiteCourses.course'),
    query
  )
    .search(BlogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};

export const BlogServices = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
