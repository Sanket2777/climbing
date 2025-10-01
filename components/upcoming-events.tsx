import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Beginner's Climbing Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Main Climbing Area",
    description: "Perfect for those new to climbing. Learn basic techniques and safety.",
  },
  {
    id: 2,
    title: "Youth Climbing Competition",
    date: "March 22, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Competition Wall",
    description: "Annual competition for climbers aged 8-17. Prizes and fun for all!",
  },
  {
    id: 3,
    title: "Adult Bouldering Night",
    date: "March 28, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Bouldering Area",
    description: "Social climbing session with music, snacks, and great company.",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting climbing events, workshops, and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
