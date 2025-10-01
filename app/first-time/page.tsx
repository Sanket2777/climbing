import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Shirt, Scale, HelpCircle } from "lucide-react"
import Link from "next/link"

const requirements = [
  {
    icon: Clock,
    title: "Safety Briefing",
    description: "All first-time climbers must complete a 15-minute safety briefing before climbing.",
  },
  {
    icon: Scale,
    title: "Age & Weight Requirements",
    description: "Minimum age: 5 years old. Maximum weight limit: 300 lbs for safety equipment.",
  },
  {
    icon: Shirt,
    title: "What to Wear",
    description: "Comfortable athletic clothing that allows full range of motion. Closed-toe shoes required.",
  },
]

const faqs = [
  {
    question: "Do I need to bring my own equipment?",
    answer:
      "No! We provide all necessary climbing equipment including harnesses, shoes, and chalk. Just bring yourself and comfortable clothes.",
  },
  {
    question: "How difficult is climbing for beginners?",
    answer:
      "We have routes for all skill levels, including many beginner-friendly options. Our staff will help you find the perfect starting point.",
  },
  {
    question: "Is climbing safe?",
    answer:
      "Yes! Indoor climbing is very safe when proper procedures are followed. All our equipment is regularly inspected and our staff are trained in safety protocols.",
  },
  {
    question: "Can I climb if I'm afraid of heights?",
    answer:
      "Many climbers start with a fear of heights. You can start low and gradually work your way up as you build confidence.",
  },
  {
    question: "Do I need to be in good shape to start climbing?",
    answer:
      "Climbing is for everyone! You'll build strength and fitness as you climb. Start at your own pace and progress naturally.",
  },
  {
    question: "Can children climb?",
    answer:
      "Yes! We welcome climbers as young as 5 years old. We have special programs and equipment designed for young climbers.",
  },
]

export default function FirstTimePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">First-Time Visitors</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Welcome to Peak Climb Gym! We're excited to help you start your climbing journey. Here's everything you
              need to know for your first visit.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book Your First Visit</Link>
            </Button>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Before You Climb</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are the important things to know before your first climbing session
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((req) => {
                const Icon = req.icon
                return (
                  <Card key={req.title} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{req.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{req.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Check-in & Waiver</h3>
                      <p className="text-muted-foreground">
                        Complete your waiver and check-in at the front desk. Our staff will be happy to answer any
                        questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Safety Briefing</h3>
                      <p className="text-muted-foreground">
                        Attend a 15-minute safety briefing covering basic climbing safety, equipment use, and gym rules.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Get Your Gear</h3>
                      <p className="text-muted-foreground">
                        We'll fit you with climbing shoes, a harness, and provide chalk. All equipment is included in
                        your day pass.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Start Climbing!</h3>
                      <p className="text-muted-foreground">
                        Begin with easier routes and work your way up. Our staff are always available to help and give
                        tips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/beginner-climber-getting-safety-briefing.jpg" alt="Safety briefing" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Common questions from first-time climbers</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Climbing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your first visit today and discover the excitement of indoor rock climbing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
