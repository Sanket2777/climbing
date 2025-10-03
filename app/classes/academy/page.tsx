import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Calendar, Users, Award, Star } from "lucide-react"
import Link from "next/link"



const academyTracks = [
  {
    title: "Competition Prep Track",
    level: "Intermediate to Advanced",
    duration: "12 weeks",
    schedule: "3x per week",
    price: " ₹15999/month",
    description:
      "Intensive training program for climbers preparing for local and regional competitions. Focus on technique, strength, and mental preparation.",
    includes: [
      "Personalized training plans",
      "Competition technique coaching",
      "Mental performance training",
      "Strength and conditioning",
      "Video analysis sessions",
      "Competition entry support",
    ],
    goals: ["Competition readiness", "Advanced technique mastery", "Mental toughness", "Peak performance"],
  },
  {
    title: "Advanced Skills Track",
    level: "Advanced Beginner to Intermediate",
    duration: "8 weeks",
    schedule: "2x per week",
    price: "₹12999/month",
    description:
      "Comprehensive skill development program focusing on advanced climbing techniques and movement efficiency.",
    includes: [
      "Advanced movement patterns",
      "Route reading strategies",
      "Efficiency training",
      "Strength building protocols",
      "Flexibility and mobility work",
      "Progress tracking and assessment",
    ],
    goals: ["Technical proficiency", "Movement efficiency", "Strength development", "Route reading skills"],
  },
  {
    title: "Outdoor Transition Track",
    level: "Intermediate",
    duration: "10 weeks",
    schedule: "2x per week + outdoor sessions",
    price: "₹14599/month",
    description:
      "Bridge the gap between indoor and outdoor climbing with specialized training and guided outdoor experiences.",
    includes: [
      "Outdoor climbing techniques",
      "Risk management training",
      "Equipment and gear education",
      "Weather and route planning",
      "Guided outdoor sessions",
      "Leave No Trace principles",
    ],
    goals: ["Outdoor climbing skills", "Risk assessment", "Self-sufficiency", "Environmental awareness"],
  },
]

const coachingStaff = [
  {
    name: "Anant",
    title: "Head Coach",
    credentials: "USAC Level 2, 15+ years experience",
    specialties: ["Competition coaching", "Advanced technique", "Mental performance"],
    bio: "Former national team member with extensive competition and coaching experience.",
  },
  {
    name: "Yash",
    title: "Technique Specialist",
    credentials: "AMGA Certified, Movement specialist",
    specialties: ["Movement efficiency", "Injury prevention", "Flexibility training"],
    bio: "Expert in biomechanics and movement optimization for climbing performance.",
  },
  {
    name: "Vijay",
    title: "Outdoor Program Director",
    credentials: "AMGA Rock Guide, Wilderness First Aid",
    specialties: ["Outdoor climbing", "Risk management", "Route planning"],
    bio: "Professional guide with 20+ years of outdoor climbing and instruction experience.",
  },
]

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      

      


      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">climb_spark Academy</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Elite training programs for serious climbers looking to reach their full potential. Personalized coaching,
              structured progression, and comprehensive skill development.
            </p>
          </div> 
        </section>

        {/* Academy Tracks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Academy Training Tracks</h2>
              <p className="text-xl text-muted-foreground">
                Specialized programs designed to accelerate your climbing development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {academyTracks.map((track) => (
                <Card key={track.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                      {track.level}
                    </div>
                    <p className="text-muted-foreground text-sm">{track.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span>{track.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span>{track.schedule}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-primary">{track.price}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Program Includes:</h4>
                      <ul className="space-y-1">
                        {track.includes.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Training Goals:</h4>
                      <div className="flex flex-wrap gap-1">
                        {track.goals.map((goal) => (
                          <span
                            key={goal}
                            className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Staff */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Expert Coaching Staff</h2>
              <p className="text-xl text-muted-foreground">
                Learn from certified professionals with extensive competition and coaching experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coachingStaff.map((coach) => (
                <Card key={coach.name} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{coach.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{coach.title}</p>
                    <p className="text-muted-foreground text-xs mb-3">{coach.credentials}</p>
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {coach.specialties.map((specialty) => (
                          <span key={specialty} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{coach.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academy Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Academy Advantages</h2>
              <p className="text-xl text-muted-foreground">
                Why serious climbers choose Peak Climb Academy for their development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Personalized Training</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Individual assessment and customized training plans tailored to your specific goals and abilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Competition Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive competition preparation including technique, mental training, and event support.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Small Group Training</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Limited class sizes ensure individual attention and accelerated skill development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Your Climbing to the Next Level?</h2>
            <p className="text-xl mb-8 opacity-90">
              Academy programs require an application and skill assessment to ensure the best fit for your development
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Apply to Academy</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Schedule Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
