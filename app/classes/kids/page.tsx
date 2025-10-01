import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, Calendar, Star, Gift } from "lucide-react"
import Link from "next/link"

const kidsPrograms = [
  {
    title: "Little Climbers (Ages 5-7)",
    ageRange: "5-7 years",
    duration: "45 minutes",
    maxSize: "6 kids",
    price: "$25",
    schedule: "Saturdays 9:00 AM",
    description:
      "Introduction to climbing through fun games and activities. Focus on basic movement, following directions, and building confidence.",
    includes: [
      "Fun climbing games",
      "Basic movement skills",
      "Safety awareness",
      "Confidence building",
      "All equipment included",
    ],
  },
  {
    title: "Young Adventurers (Ages 8-12)",
    ageRange: "8-12 years",
    duration: "1 hour",
    maxSize: "8 kids",
    price: "$30",
    schedule: "Saturdays 10:30 AM",
    description:
      "Structured climbing instruction with technique focus. Learn proper climbing form, knots, and safety procedures.",
    includes: [
      "Climbing technique training",
      "Knot tying skills",
      "Safety procedures",
      "Goal setting activities",
      "Achievement certificates",
    ],
  },
  {
    title: "Teen Climbers (Ages 13-17)",
    ageRange: "13-17 years",
    duration: "1.5 hours",
    maxSize: "10 teens",
    price: "$40",
    schedule: "Sundays 3:00 PM",
    description:
      "Advanced climbing program for teenagers. Focus on technique refinement, strength building, and competition preparation.",
    includes: [
      "Advanced techniques",
      "Strength training",
      "Competition preparation",
      "Leadership opportunities",
      "Mentorship programs",
    ],
  },
]

const summerCamps = [
  {
    title: "Half-Day Adventure Camp",
    duration: "4 hours/day",
    ages: "Ages 6-12",
    price: "$65/day",
    description: "Morning climbing adventures with games, challenges, and skill building activities.",
  },
  {
    title: "Full-Day Explorer Camp",
    duration: "8 hours/day",
    ages: "Ages 8-14",
    price: "$95/day",
    description: "Complete day of climbing, outdoor activities, and adventure education with lunch included.",
  },
  {
    title: "Teen Leadership Camp",
    duration: "6 hours/day",
    ages: "Ages 13-17",
    price: "$85/day",
    description: "Advanced climbing skills combined with leadership training and mentoring opportunities.",
  },
]

export default function KidsClassesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Kids Climbing Programs</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Safe, fun, and educational climbing programs designed specifically for young adventurers. Build
              confidence, strength, and friendships through the joy of climbing!
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Age-Appropriate Programs</h2>
              <p className="text-xl text-muted-foreground">
                Each program is carefully designed for specific age groups and developmental stages
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {kidsPrograms.map((program) => (
                <Card key={program.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                      {program.ageRange}
                    </div>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span>Max {program.maxSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span className="text-xs">{program.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-primary">{program.price}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Program Includes:</h4>
                      <ul className="space-y-1">
                        {program.includes.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Enroll Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety First */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Safety First Approach</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your child's safety is our absolute priority. All our youth programs follow strict safety protocols
                  with certified instructors trained specifically in youth climbing education.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Certified Youth Instructors</h3>
                      <p className="text-muted-foreground text-sm">
                        All instructors are certified in youth climbing instruction and child development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Age-Appropriate Equipment</h3>
                      <p className="text-muted-foreground text-sm">
                        Specialized climbing gear sized and designed specifically for children
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Low Instructor-to-Student Ratios</h3>
                      <p className="text-muted-foreground text-sm">
                        Small class sizes ensure individual attention and proper supervision
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Progressive Skill Building</h3>
                      <p className="text-muted-foreground text-sm">
                        Structured curriculum that builds skills safely and systematically
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/kids-climbing-wall-with-safety-equipment.jpg"
                  alt="Kids climbing safely with instructor"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Summer Camps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Summer Adventure Camps</h2>
              <p className="text-xl text-muted-foreground">
                Week-long adventures combining climbing with outdoor education and fun activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {summerCamps.map((camp) => (
                <Card key={camp.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{camp.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        {camp.ages}
                      </span>
                      <span className="font-bold text-primary">{camp.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{camp.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {camp.duration}
                    </div>
                    <Button asChild className="w-full bg-transparent" variant="outline">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Birthday Parties */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Gift className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-bold">Birthday Party Packages</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Make your child's birthday unforgettable with a climbing adventure party! We handle everything so you
                  can focus on celebrating.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    <span className="opacity-90">2-hour private climbing session</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    <span className="opacity-90">Up to 10 participants included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    <span className="opacity-90">Dedicated party area and decorations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    <span className="opacity-90">All climbing equipment provided</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    <span className="opacity-90">Add-on food packages available</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">Book Party</Link>
                  </Button>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-bold">$299</div>
                    <div className="text-sm opacity-90">Complete party package</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/birthaday party.png"
                  alt="Kids birthday party at climbing gym"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
