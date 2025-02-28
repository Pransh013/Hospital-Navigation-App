import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  gender: z.enum(["male", "female", "other"], {
    message: "Invalid gender selected",
  }),
  packageType: z.enum(["individual", "corporate"], {
    message: "Invalid package type selected",
  }),
});
