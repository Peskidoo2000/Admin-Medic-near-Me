import * as z from "zod";

export const loginValidation = z.object({
   email:z.string().email("Invalid email address"),
   password:z.string().min(4, "password must be at least 4 characters long ")
})