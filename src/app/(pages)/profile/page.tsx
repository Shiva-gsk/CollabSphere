"use client"
import { AvatarLogo } from "@/components/Avatar";
import React from "react";
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session } = useSession();
  return (
    <section className="w-full">
      <div className="flex w-[100%] items-center justify-center">
        <AvatarLogo imageUrl={session?.user?.image}/>
      </div>
      <div className="mt-7 flex w-[100%] items-center justify-center text-2xl">
      {session?.user?.name}

      </div>
      <Button onClick={() => {signOut()}}> Sign Out
      </Button>
    </section>
  );
};

