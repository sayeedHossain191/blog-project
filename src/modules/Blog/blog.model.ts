import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, "title is required."],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, "Author id is required"],
      unique: true,
      ref: "Author",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    // createdAt: {
    //   type: Date,
    // },
    // updatedAt: {
    //   type: Date,
    // },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>("Blog", blogSchema);
