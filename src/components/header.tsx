import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto flex-col md:flex-row flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          CollabSphere
        </Link>
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
        <div className=" space-x-2 flex pt-4 md:p-0">
          <Link href="/login"><Button variant="ghost">Log In</Button></Link>
          <Link href="/signup"><Button>Sign Up</Button></Link>
        </div>
      </div>
    </header>
  )
}

