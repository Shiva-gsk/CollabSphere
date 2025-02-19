import { Calendar, CheckSquare, FileText, Bell, BarChart } from "lucide-react"

const features = [
  {
    icon: CheckSquare,
    title: "Task Scheduling",
    description: "Create and assign tasks with deadlines to team members.",
  },
  {
    icon: Calendar,
    title: "Meeting Coordination",
    description: "Schedule meetings and sync with calendars automatically.",
  },
  {
    icon: FileText,
    title: "Insight Sharing",
    description: "Share notes, documents, and resources in a centralized repository.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get automatic reminders for tasks and meetings.",
  },
  {
    icon: BarChart,
    title: "Custom Analytics",
    description: "Monitor team productivity with customizable analytics.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

