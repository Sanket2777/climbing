import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Trophy, Star, Heart } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Monthly Bouldering Competition",
    date: "2024-02-15",
    time: "6:00 PM - 9:00 PM",
    location: "Main Bouldering Area",
    category: "Competition",
    difficulty: "All Levels",
    price: "$25",
    spots: "15 spots left",
    description:
      "Join our monthly bouldsering competition! Categories for all skill levels with prizes for top performers.",
    image: "/group-of-people-bouldering-in-climbing-gym.jpg",
    features: ["Prizes for winners", "Food and drinks", "Professional photography", "Skill categories"],
  },
  {
    id: 2,
    title: "Outdoor Climbing Trip - Red Rocks",
    date: "2024-02-22",
    time: "6:00 AM - 8:00 PM",
    location: "Red Rock Canyon, Nevada",
    category: "Outdoor",
    difficulty: "Intermediate+",
    price: "$150",
    spots: "3 spots left",
    description:
      "Guided outdoor climbing adventure to the world-famous Red Rock Canyon. Transportation and gear included.",
    image: "/professional-climbing-instructor-teaching-techniqu.jpg",
    features: ["Professional guide", "Transportation included", "Gear provided", "Lunch included"],
  },
  {
    id: 3,
    title: "Kids Climbing Birthday Party",
    date: "2024-02-17",
    time: "2:00 PM - 4:00 PM",
    location: "Kids Climbing Area",
    category: "Kids",
    difficulty: "Beginner",
    price: "$200 (up to 8 kids)",
    spots: "Available",
    description:
      "Make your child's birthday unforgettable with a climbing party! Includes instruction, games, and party space.",
    image: "/5.jpeg",
    features: ["Party host included", "Climbing instruction", "Party decorations", "Private party area"],
  },
  {
    id: 4,
    title: "Women's Climbing Night",
    date: "2024-02-20",
    time: "7:00 PM - 9:00 PM",
    location: "Entire Facility",
    category: "Community",
    difficulty: "All Levels",
    price: "Free",
    spots: "Open to all",
    description: "Monthly women's climbing night featuring supportive community, skill sharing, and fun challenges.",
    image: "/professional-female-climbing-instructor.jpg",
    features: ["Supportive community", "Skill workshops", "Networking", "Refreshments"],
  },
  {
    id: 5,
    title: "Advanced Technique Workshop",
    date: "2024-02-25",
    time: "10:00 AM - 2:00 PM",
    location: "Training Area",
    category: "Workshop",
    difficulty: "Advanced",
    price: "$75",
    spots: "8 spots left",
    description:
      "Intensive workshop focusing on advanced climbing techniques, movement efficiency, and problem-solving.",
    image: "/male-climbing-route-setter.jpg",
    features: ["Expert instruction", "Video analysis", "Personalized feedback", "Take-home materials"],
  },
  {
    id: 6,
    title: "Youth Team Tryouts",
    date: "2024-03-01",
    time: "4:00 PM - 6:00 PM",
    location: "Competition Wall",
    category: "Youth",
    difficulty: "Intermediate+",
    price: "Free",
    spots: "Registration required",
    description:
      "Tryouts for our competitive youth climbing team. Open to climbers ages 8-17 with intermediate+ skills.",
    image: "/6.jpeg",
    features: ["Skill assessment", "Team information", "Parent meeting", "Registration required"],
  },
]

const eventCategories = [
  { name: "All Events", value: "all", color: "bg-gray-100 text-gray-800" },
  { name: "Competition", value: "competition", color: "bg-red-100 text-red-800" },
  { name: "Outdoor", value: "outdoor", color: "bg-green-100 text-green-800" },
  { name: "Workshop", value: "workshop", color: "bg-blue-100 text-blue-800" },
  { name: "Community", value: "community", color: "bg-purple-100 text-purple-800" },
  { name: "Kids", value: "kids", color: "bg-yellow-100 text-yellow-800" },
  { name: "Youth", value: "youth", color: "bg-pink-100 text-pink-800" },
]

function getCategoryColor(category: string) {
  const categoryMap: { [key: string]: string } = {
    Competition: "bg-red-100 text-red-800",
    Outdoor: "bg-green-100 text-green-800",
    Workshop: "bg-blue-100 text-blue-800",
    Community: "bg-purple-100 text-purple-800",
    Kids: "bg-yellow-100 text-yellow-800",
    Youth: "bg-pink-100 text-pink-800",
  }
  return categoryMap[category] || "bg-gray-100 text-gray-800"
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Events & Activities</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our vibrant climbing community through competitions, workshops, outdoor adventures, and social
              events. Something exciting happening every week!
            </p>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {eventCategories.map((category) => (
                <Badge
                  key={category.value}
                  variant="secondary"
                  className={`${category.color} cursor-pointer hover:opacity-80`}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground">
                Don't miss out on these exciting climbing events and activities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {event.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {event.features.map((feature) => (
                        <span key={feature} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 text-primary mr-1" />
                          <span className="font-medium">{event.spots}</span>
                        </div>
                        <div className="text-lg font-bold text-primary">{event.price}</div>
                      </div>
                      <Button asChild>
                        <Link href="/contact">Register Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Events We Host</h2>
              <p className="text-xl text-muted-foreground">
                From competitions to community gatherings, there's something for every climber
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Competitions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Monthly bouldering and route competitions for all skill levels with prizes and recognition.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Outdoor Adventures</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Guided trips to local and destination climbing areas with professional instruction and gear.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Workshops</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Skill-building workshops covering technique, safety, gear, and specialized climbing disciplines.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Community Events</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Social climbing nights, member appreciation events, and community building activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Youth Programs</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Special events for young climbers including camps, competitions, and skill development programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Private Events</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Birthday parties, corporate team building, and private group events with customized programming.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Events</h2>
            <p className="text-xl mb-8 opacity-90">
              Follow us on social media or sign up for our newsletter to never miss an exciting climbing event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Join Our Newsletter</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Host Private Event</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
