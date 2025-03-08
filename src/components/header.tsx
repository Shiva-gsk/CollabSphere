
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>{
      if (headerRef.current &&
        navRef.current &&
        event.target instanceof Node &&
        (!headerRef.current.contains(event.target) &&
        !navRef.current.contains(event.target))){
        // setIsOpen(false);
        console.log(!headerRef.current.contains(event.target));
        console.log(!navRef.current.contains(event.target));
        console.log("clicked outside");
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])
  
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession()
  return (
    <header className="py-4 pb-0 md:pb-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-500 w-full border-b border-border/40 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          CollabSphere
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-muted-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">
            How it Works
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-2">
          <Link href="/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button 
          ref={navRef}
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen? "40vh": "0px", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`overflow md:hidden flex flex-col items-center space-y-4 bg-background px-6 py-4 z-100`}
      >
        <div className="flex flex-col items-center space-y-4" ref={headerRef}>
        <Link href="#features" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
          Features
        </Link>
        <Link href="#how-it-works" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
          How it Works
        </Link>
        <Link href="#pricing" className="text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
          Pricing
        </Link>
        {/* Auth Buttons (Mobile) */}
        {session?<>
          <Link href="/dashboard" className="w-full">
            <Button variant="ghost" className="w-full">Dashboard</Button>
          </Link>
          <Link href="/logout" className="w-full">
            <Button className="w-full">Log Out</Button>
          </Link>
          </>:<>
          <Link href="/login" className="w-full">
            <Button variant="ghost" className="w-full">Log In</Button>
          </Link>
          <Link href="/signup" className="w-full">
            <Button className="w-full">Sign Up</Button>
          </Link>
          </>
        }
        </div>
        

        {/* <Link href="/login" className="w-full">
          <Button variant="ghost" className="w-full">Log In</Button>
        </Link>
        <Link href="/signup" className="w-full">
          <Button className="w-full">Sign Up</Button>
        </Link> */}
      </motion.div>
    </header>
  );
}
