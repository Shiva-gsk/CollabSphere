import { Users, FolderPlus, Calendar, Zap } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Create or Join an Organization",
    description: "Set up a public or private organization for your team or project.",
  },
  {
    icon: FolderPlus,
    title: "Add Projects and Tasks",
    description: "Create projects and assign tasks to team members.",
  },
  {
    icon: Calendar,
    title: "Schedule Meetings",
    description: "Coordinate meetings and sync with everyone's calendar.",
  },
  {
    icon: Zap,
    title: "Collaborate and Stay Productive",
    description: "Share insights, receive reminders, and track progress.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

