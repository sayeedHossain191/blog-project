import { z } from "zod";

const userValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "name must be at least 3 characters long." })
    .max(30, { message: "name must be less than 30 characters long." }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),

  role: z
    .enum(["admin", "user"], {
      message: "Role must be either 'admin' or 'user'.",
    })
    .optional(),

  isBlocked: z.boolean().optional(),

  createdAt: z.date().optional(),

  updatedAt: z.date().optional(),
});

export const UserValidation = {
  userValidationSchema,
};
