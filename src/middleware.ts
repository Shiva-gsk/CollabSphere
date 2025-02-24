// import NextAuth from "next-auth"// import {auth} from "@/auth";
// import authConfig from "@/auth.config"
import { DEFAULT_LOGIN_REDIRECT, authRoutes, apiAuthPrefix, publicRoutes } from "../route";

import { auth as middleware } from "@/auth";

export default middleware((req) =>{
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
  const isApiAuth = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuth = authRoutes.includes(nextUrl.pathname);

  if(isApiAuth){
    return undefined;
  }
  if(isAuth){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return undefined;
  }

  if(!isPublic && !isLoggedIn){
    return Response.redirect(new URL("/login", nextUrl));
  }
  return undefined;
  // console.log(req.nextUrl.pathname);
});

export const config = {
    runtime:"nodejs",
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }