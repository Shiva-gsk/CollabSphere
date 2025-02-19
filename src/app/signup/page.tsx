"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/auth/CardWrapper";
import { cn } from "@/lib/utils";
import { LoginSchema } from "@/schemas";
import { useTransition } from "react";
import { login } from "@/actions/login";


export default function Login() {
  const [isPending, setTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const OnSubmit = (values : z.infer<typeof LoginSchema>) =>{
    login(values);
  }

  return (
    <>
      <section className="flex justify-center items-center min-h-screen min-w-[100vw]">
        <CardWrapper
          headerLabel="Create an account"
          backButtonLabel="Don't have an account?"
          backButtonLink="/signup"
          showSocial
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-6">
              <div className="space-y-4 md:w-[300px]">
                <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input {...field} id="email" type="email" placeholder="example@gmail.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input {...field} id="password" type="password" placeholder="*******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </Form>
        </CardWrapper>
      </section>
    </>
  );
}
