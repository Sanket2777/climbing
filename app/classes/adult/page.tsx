import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"

const adultClasses = [
  {
    title: "Beginner Fundamentals",
    level: "Beginner",
    duration: "2 hours",
    maxSize: "8 climbers",
    price: "$45",
    schedule: "Saturdays 10:00 AM",
    description:
      "Perfect for complete beginners. Learn basic climbing techniques, safety procedures, and equipment use in a supportive environment.",
    includes: [
      "Basic climbing techniques",
      "Safety and equipment training",
      "Knot tying fundamentals",
      "Route reading basics",
      "All equipment included",
    ],
  },
  {
    title: "Intermediate Technique",
    level: "Intermediate",
    duration: "2 hours",
    maxSize: "6 climbers",
    price: "$55",
    schedule: "Sundays 2:00 PM",
    description:
      "Take your climbing to the next level with advanced techniques, movement efficiency, and mental strategies.",
    includes: [
      "Advanced movement techniques",
      "Efficiency and flow training",
      "Mental climbing strategies",
      "Route planning skills",
      "Personalized feedback",
    ],
  },
  {
    title: "Lead Climbing Course",
    level: "Advanced Beginner",
    duration: "3 hours",
    maxSize: "4 climbers",
    price: "$75",
    schedule: "Saturdays 2:00 PM",
    description: "Learn to lead climb safely with proper clipping techniques, fall practice, and risk management.",
    includes: [
      "Lead climbing fundamentals",
      "Clipping techniques",
      "Fall practice and safety",
      "Risk assessment",
      "Lead belay certification",
    ],
  },
  {
    title: "Bouldering Workshop",
    level: "All Levels",
    duration: "1.5 hours",
    maxSize: "10 climbers",
    price: "$35",
    schedule: "Fridays 7:00 PM",
    description: "Focus on problem-solving, dynamic movement, and strength building through bouldering challenges.",
    includes: [
      "Problem-solving techniques",
      "Dynamic movement training",
      "Strength building exercises",
      "Spotting and safety",
      "Route setting insights",
    ],
  },
]

const weeklySchedule = [
  { day: "Monday", classes: ["Private Lessons Available"] },
  { day: "Tuesday", classes: ["Private Lessons Available"] },
  { day: "Wednesday", classes: ["Private Lessons Available"] },
  { day: "Thursday", classes: ["Private Lessons Available"] },
  { day: "Friday", classes: ["Bouldering Workshop - 7:00 PM"] },
  { day: "Saturday", classes: ["Beginner Fundamentals - 10:00 AM", "Lead Climbing Course - 2:00 PM"] },
  { day: "Sunday", classes: ["Intermediate Technique - 2:00 PM"] },
]

export default function AdultClassesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Adult Climbing Classes</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Develop your climbing skills with our structured classes designed for adult learners. From complete
              beginners to advanced climbers looking to refine their technique.
            </p>
          </div>
        </section>

        {/* Class Offerings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Classes</h2>
              <p className="text-xl text-muted-foreground">
                Small class sizes ensure personalized attention and rapid skill development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {adultClasses.map((class_) => (
                <Card key={class_.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{class_.title}</CardTitle>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {class_.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{class_.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span>{class_.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span>Max {class_.maxSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span>{class_.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-primary">{class_.price}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {class_.includes.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Book This Class</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Weekly Schedule</h2>
              <p className="text-xl text-muted-foreground">Plan your climbing education around your schedule</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {weeklySchedule.map((day) => (
                    <div
                      key={day.day}
                      className="flex flex-col sm:flex-row sm:items-center border-b border-border pb-4 last:border-b-0"
                    >
                      <div className="font-semibold text-foreground w-24 mb-2 sm:mb-0">{day.day}</div>
                      <div className="flex-1">
                        {day.classes.map((class_, index) => (
                          <div key={index} className="text-muted-foreground text-sm">
                            {class_}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Private Lessons */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Private Lessons</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get personalized instruction tailored to your specific goals and skill level. Our certified
                  instructors will work with you one-on-one to accelerate your climbing progress.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">Customized curriculum based on your goals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">Flexible scheduling to fit your availability</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">Faster skill development with focused attention</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">Perfect for specific technique improvement</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">Book Private Lesson</Link>
                  </Button>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-bold text-primary">$85/hour</div>
                    <div className="text-sm text-muted-foreground">One-on-one instruction</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/10.jpeg"
                  alt="Private climbing lesson"
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
