"use client"
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".container", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1}
    );


    
  });
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Collaborate and Schedule with Ease
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          CollabSphere is the ultimate platform for teams to create, schedule,
          and collaborate efficiently.
        </p>
        <Button size="lg" className="mr-4">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
}
