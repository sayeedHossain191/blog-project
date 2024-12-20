import { z } from "zod";

export const blogValidationSchema = z.object({
  title: z.string().min(1, { message: "title is required." }),

  content: z.string().min(1, { message: "content is required." }),

  author: z.string().min(1, { message: "Author id is required." }),

  isPublished: z.boolean().optional(),

  // createdAt: z.date().optional(),

  // updatedAt: z.date().optional(),
});

export const blogValidation = {
  blogValidationSchema,
};
