import * as z from "zod";

export const formSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});
