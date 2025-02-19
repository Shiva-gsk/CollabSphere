import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to boost your team&apos;s productivity?</h2>
        <p className="text-xl mb-8">Join CollabSphere today and transform the way your team collaborates.</p>
        <Button size="lg" variant="secondary">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

