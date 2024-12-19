// import { Date, ObjectId } from "mongoose";

import { Types } from "mongoose";

export interface TBlog {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
