import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Baby, GraduationCap } from "lucide-react"
import Link from "next/link"

const classTypes = [
  {
    icon: Users,
    title: "Adult Classes",
    description:
      "Learn proper climbing techniques in a supportive group environment. Perfect for beginners and intermediate climbers.",
    features: ["Basic to Advanced Techniques", "Safety Training", "Equipment Included", "Small Group Sizes"],
    href: "/classes/adult",
  },
  {
    icon: Baby,
    title: "Kids Programs",
    description:
      "Fun and safe climbing programs designed specifically for children aged 5-17. Build confidence and strength!",
    features: [
      "Age-Appropriate Activities",
      "Certified Instructors",
      "Safety First Approach",
      "Birthday Parties Available",
    ],
    href: "/classes/kids",
  },
  {
    icon: GraduationCap,
    title: "Climbing Academy",
    description: "Intensive training program for serious climbers looking to take their skills to the next level.",
    features: ["Advanced Techniques", "Competition Prep", "Personal Coaching", "Flexible Scheduling"],
    href: "/classes/academy",
  },
]

export function ClassesHighlight() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Classes & Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a beginner or looking to advance your skills, we have the perfect program for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classTypes.map((classType) => {
            const Icon = classType.icon
            return (
              <Card key={classType.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{classType.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{classType.description}</p>
                  <ul className="space-y-2">
                    {classType.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={classType.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
