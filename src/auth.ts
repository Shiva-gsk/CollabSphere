
import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
// import GitHub from "next-auth/providers/github"
// import authConfig from "./auth.config"
import { db } from "./lib/db"
import Credentials from "next-auth/providers/credentials"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: PrismaAdapter(db),
//   session: {strategy: "jwt"},
//   // providers: [GitHub],
//   ...authConfig,
// })


// import GitHub from "next-auth/providers/github"
// import authConfig from "./auth.config"
import bcrypt from "bcryptjs";
import { LoginSchema } from "./schemas";

// import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  // providers: [GitHub],
  providers:[Credentials({
          async authorize(credentials){
              const valid = await LoginSchema.safeParse(credentials);
              if(valid.success){
                  const {email, password} = valid.data;
                  const user = await getUserByEmail(email);
                  if (!user || !user.password){
                      return null;
                  }
  
                  const isValid = await bcrypt.compare(password, user.password);
                  if(isValid){
                      return user;
                  }
              }
              return null;
          }
      })],
})