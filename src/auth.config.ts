import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "./schemas";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";

export default{
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
} satisfies NextAuthConfig;