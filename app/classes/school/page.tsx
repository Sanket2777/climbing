import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, BookOpen, Award, Building, Briefcase } from "lucide-react"
import Link from "next/link"

const schoolPrograms = [
  {
    title: "Elementary School Program",
    grades: "Grades K-5",
    duration: "2 hours",
    minSize: "15 students",
    price: "$15/student",
    description:
      "Age-appropriate climbing activities that promote physical fitness, problem-solving, and teamwork skills.",
    includes: [
      "Safety instruction and equipment",
      "Basic climbing skills introduction",
      "Team building activities",
      "Educational components",
      "Certified instructors",
      "Curriculum tie-ins available",
    ],
    curriculum: ["Physical Education", "Science (Physics)", "Character Building", "Problem Solving"],
  },
  {
    title: "Middle School Program",
    grades: "Grades 6-8",
    duration: "2.5 hours",
    minSize: "15 students",
    price: "$18/student",
    description:
      "Challenging climbing experiences that build confidence, leadership skills, and physical fitness for adolescents.",
    includes: [
      "Advanced climbing techniques",
      "Leadership challenges",
      "Goal setting activities",
      "Safety and risk management",
      "Team building exercises",
      "Achievement recognition",
    ],
    curriculum: ["Physical Education", "Leadership Development", "Risk Assessment", "Goal Setting"],
  },
  {
    title: "High School Program",
    grades: "Grades 9-12",
    duration: "3 hours",
    minSize: "12 students",
    price: "$22/student",
    description:
      "Comprehensive climbing education focusing on advanced skills, leadership, and outdoor recreation preparation.",
    includes: [
      "Advanced climbing instruction",
      "Outdoor climbing preparation",
      "Leadership opportunities",
      "Career exploration in outdoor industry",
      "Environmental education",
      "College prep activities",
    ],
    curriculum: ["Outdoor Recreation", "Environmental Science", "Career Exploration", "Leadership"],
  },
]

const corporatePrograms = [
  {
    title: "Team Building Experience",
    duration: "3 hours",
    minSize: "8 people",
    price: "$49/person",
    description:
      "Build trust, communication, and collaboration through challenging climbing activities designed for teams.",
    includes: [
      "Professional facilitation",
      "Trust building exercises",
      "Communication challenges",
      "Problem-solving activities",
      "Debrief and reflection",
      "All equipment included",
    ],
  },
  {
    title: "Leadership Development",
    duration: "4 hours",
    minSize: "6 people",
    price: "$65/person",
    description:
      "Develop leadership skills through climbing challenges that require decision-making and team management.",
    includes: [
      "Leadership assessment activities",
      "Decision-making challenges",
      "Risk management training",
      "Coaching and feedback",
      "Action planning session",
      "Follow-up resources",
    ],
  },
  {
    title: "Executive Retreat",
    duration: "Full day",
    minSize: "10 people",
    price: "$95/person",
    description:
      "Comprehensive team development experience combining climbing with strategic planning and team alignment.",
    includes: [
      "Morning climbing challenges",
      "Strategic planning session",
      "Team alignment activities",
      "Catered lunch included",
      "Professional facilitation",
      "Meeting space provided",
    ],
  },
]

export default function SchoolProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">School & Group Programs</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Educational climbing experiences designed for schools, corporate teams, and organized groups. Combine
              physical activity with valuable life skills development.
            </p>
          </div>
        </section>

        {/* School Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">School Field Trip Programs</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Curriculum-aligned climbing experiences that support educational objectives
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {schoolPrograms.map((program) => (
                <Card key={program.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                      {program.grades}
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
                        <span>Min {program.minSize}</span>
                      </div>
                      <div className="flex items-center col-span-2">
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

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Curriculum Connections:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.curriculum.map((subject) => (
                          <span
                            key={subject}
                            className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Book Field Trip</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Programs */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Corporate Team Building</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Strengthen your team through challenging and rewarding climbing experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {corporatePrograms.map((program) => (
                <Card key={program.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
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
                        <span>Min {program.minSize}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-primary">{program.price}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Experience Includes:</h4>
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
                      <Link href="/contact">Plan Team Event</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Group Programs?</h2>
              <p className="text-xl text-muted-foreground">
                Professional facilitation and educational value that goes beyond just climbing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Professional Facilitation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Experienced facilitators guide activities to maximize learning and team development outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Educational Value</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Programs align with educational standards and corporate development objectives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Customizable Experiences</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Programs can be tailored to meet specific group needs, objectives, and time constraints.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Group Experience?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us to discuss your group's needs and create a customized climbing experience that meets your
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Group Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Schedule Site Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
