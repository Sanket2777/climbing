import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Target } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head Instructor & Founder",
    bio: "With over 15 years of climbing experience and certifications from multiple climbing organizations, Sarah founded Peak Climb to share her passion for the sport.",
    image: "/professional-female-climbing-instructor.jpg",
  },
  {
    name: "Mike Chen",
    role: "Lead Route Setter",
    bio: "Mike brings creativity and technical expertise to our climbing routes. He's competed nationally and loves designing challenges for all skill levels.",
    image: "/male-climbing-route-setter.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Youth Program Director",
    bio: "Emma specializes in youth climbing programs and has a background in child development. She makes climbing fun and safe for our youngest adventurers.",
    image: "/female-youth-climbing-instructor.jpg",
  },
  {
    name: "Alex Thompson",
    role: "Safety Coordinator",
    bio: "Alex ensures all our equipment and procedures meet the highest safety standards. He's a certified climbing instructor with wilderness first aid training.",
    image: "/male-climbing-safety-coordinator.jpg",
  },
]

const values = [
  {
    icon: Heart,
    title: "Community",
    description:
      "We believe climbing is better together. Our gym fosters a welcoming community where everyone supports each other.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from our facilities to our instruction to our customer service.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Climbing is for everyone. We welcome climbers of all backgrounds, abilities, and experience levels.",
  },
  {
    icon: Award,
    title: "Safety",
    description:
      "Safety is our top priority. We maintain the highest standards for equipment, training, and procedures.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Peak Climb Gym</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2018, Peak Climb Gym has been the premier indoor climbing destination in our community. We're
              passionate about sharing the joy, challenge, and community of climbing with everyone who walks through our
              doors.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Peak Climb Gym was born from a simple idea: make the incredible sport of rock climbing accessible to
                    everyone in our community. Our founder, Sarah Johnson, started climbing as a teenager and fell in
                    love with the physical and mental challenges the sport provides.
                  </p>
                  <p>
                    After years of outdoor climbing and teaching, Sarah realized there was a need for a welcoming,
                    professional indoor climbing facility that could serve climbers year-round, regardless of weather or
                    experience level.
                  </p>
                  <p>
                    Today, we're proud to be home to hundreds of climbers, from complete beginners taking their first
                    steps on the wall to experienced climbers training for their next outdoor adventure. Our
                    state-of-the-art facility features over 100 climbing routes, modern safety equipment, and a team of
                    certified instructors ready to help you reach new heights.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-climbing-gym-interior-with-colorful-holds.jpg"
                  alt="Peak Climb Gym interior"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Peak Climb Gym
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our certified instructors and staff are here to help you achieve your climbing goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
