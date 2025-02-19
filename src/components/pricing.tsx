"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["Up to 5 team members", "Basic task management", "Meeting scheduling", "Email reminders"],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Up to 20 team members",
      "Advanced task management",
      "Meeting scheduling with calendar sync",
      "Email and SMS reminders",
      "Basic analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited team members",
      "Advanced task and project management",
      "Full calendar integration",
      "Advanced analytics and reporting",
      "Priority support",
    ],
  },
]

export default function Pricing() {
  useGSAP(()=>
    {
      gsap.to("#pricing", {
        scrollTrigger: {
          trigger: "#pricing",
          start: "top 50%",
        },
        opacity: 1,
        duration: 1,
        repeat: 0,
      });
      
    
    });
  return (
    <section id="pricing" className="py-20 px-6 opacity-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-border rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">/month</span>
              </p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

