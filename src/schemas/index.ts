import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import React from 'react'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string({message: 'Invalid password'}).min(1, {message: 'Password is required'})
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string({message: 'Invalid password'}).min(4),
  name: z.string().min(1, {message: 'Name is required'})
});

