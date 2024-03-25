import express from "express";
import { z } from "zod";

const app = express();

const updateUserSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z
    .string()
    .email({ message: "Invalid email formatName cannot be empty" }),
  age: z.number().min(18, { message: "You must be atleast 18 years of age!" }),
});

type FinalUserSchema = z.infer<typeof updateUserSchema>;

app.put("/update", async (req, res) => {
  const { success } = updateUserSchema.safeParse(req.body);
  const updatedInfo: FinalUserSchema = req.body;
  if (!success) {
    res.status(411).json({ msg: "failed zod validation" });
  } else {
    // db call
  }
});
