import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import React from 'react'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string({message: 'Invalid password'}).min(1, {message: 'Password is required'})
});

