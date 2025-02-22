import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    content: "CollabSphere has revolutionized how our team collaborates. It's intuitive and powerful!",
    avatar: "",
  },
  {
    name: "Bob Smith",
    role: "Team Lead",
    content: "The scheduling features have made coordinating our global team so much easier.",
    avatar: "",
  },
  {
    name: "Carol Davis",
    role: "Marketing Director",
    content: "The insights sharing feature has greatly improved our knowledge management.",
    avatar: "",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <p className="mb-4 text-muted-foreground italic">`{testimonial.content}`</p>
              <div className="flex items-center">
                <Avatar className="mr-3">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

