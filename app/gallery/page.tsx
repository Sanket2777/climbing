import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Users, Trophy, Mountain, Heart, Star } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/indoor-rock-climbing-wall-with-colorful-holds.jpg",
    alt: "Indoor climbing wall with colorful holds",
    category: "Facility",
    title: "Main Climbing Wall",
    description: "Our state-of-the-art climbing walls with routes for all skill levels",
  },
  {
    id: 2,
    src: "/group-of-people-bouldering-in-climbing-gym.jpg",
    alt: "Group bouldering session",
    category: "Community",
    title: "Bouldering Community",
    description: "Climbers supporting each other in our bouldering area",
  },
  {
    id: 3,
    src: "/kids-climbing-wall-with-safety-equipment.jpg",
    alt: "Kids climbing with safety equipment",
    category: "Youth",
    title: "Youth Programs",
    description: "Safe and fun climbing experiences for young adventurers",
  },
  {
    id: 4,
    src: "/professional-climbing-instructor-teaching-techniqu.jpg",
    alt: "Professional instructor teaching technique",
    category: "Instruction",
    title: "Expert Instruction",
    description: "Professional coaching to help you reach your climbing goals",
  },
  {
    id: 5,
    src: "/professional-female-climbing-instructor.jpg",
    alt: "Female climbing instructor",
    category: "Staff",
    title: "Certified Instructors",
    description: "Our experienced and certified climbing instructors",
  },
  {
    id: 6,
    src: "/male-climbing-route-setter.jpg",
    alt: "Route setter working on wall",
    category: "Behind the Scenes",
    title: "Route Setting",
    description: "Our route setters creating new challenges weekly",
  },
  {
    id: 7,
    src: "/female-youth-climbing-instructor.jpg",
    alt: "Youth climbing instructor",
    category: "Youth",
    title: "Youth Instruction",
    description: "Specialized instructors for our youth climbing programs",
  },
  {
    id: 8,
    src: "/male-climbing-safety-coordinator.jpg",
    alt: "Safety coordinator checking equipment",
    category: "Safety",
    title: "Safety First",
    description: "Our safety team ensuring a secure climbing environment",
  },
  {
    id: 9,
    src: "/8.jpeg",
    alt: "Private climbing lesson",
    category: "Instruction",
    title: "Private Lessons",
    description: "One-on-one instruction for personalized skill development",
  },
]

const categories = [
  { name: "All", value: "all", icon: Camera, color: "bg-gray-100 text-gray-800" },
  { name: "Facility", value: "facility", icon: Mountain, color: "bg-blue-100 text-blue-800" },
  { name: "Community", value: "community", icon: Users, color: "bg-green-100 text-green-800" },
  { name: "Youth", value: "youth", icon: Heart, color: "bg-pink-100 text-pink-800" },
  { name: "Instruction", value: "instruction", icon: Star, color: "bg-yellow-100 text-yellow-800" },
  { name: "Staff", value: "staff", icon: Users, color: "bg-purple-100 text-purple-800" },
  { name: "Behind the Scenes", value: "behind-the-scenes", icon: Camera, color: "bg-orange-100 text-orange-800" },
  { name: "Safety", value: "safety", icon: Trophy, color: "bg-red-100 text-red-800" },
]

function getCategoryColor(category: string) {
  const categoryMap: { [key: string]: string } = {
    Facility: "bg-blue-100 text-blue-800",
    Community: "bg-green-100 text-green-800",
    Youth: "bg-pink-100 text-pink-800",
    Instruction: "bg-yellow-100 text-yellow-800",
    Staff: "bg-purple-100 text-purple-800",
    "Behind the Scenes": "bg-orange-100 text-orange-800",
    Safety: "bg-red-100 text-red-800",
  }
  return categoryMap[category] || "bg-gray-100 text-gray-800"
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Photo Gallery</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take a visual journey through our climbing community. See our facilities, meet our team, and experience
              the energy of our climbing gym through these captured moments.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Badge
                    key={category.value}
                    variant="secondary"
                    className={`${category.color} cursor-pointer hover:opacity-80 flex items-center gap-1`}
                  >
                    <IconComponent className="w-3 h-3" />
                    {category.name}
                  </Badge>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(image.category)}>{image.category}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Climbing Community</h2>
              <p className="text-xl text-muted-foreground">
                Numbers that showcase our vibrant climbing community and facilities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Square Feet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Climbing Routes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1500+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Events Per Month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Facility Highlights</h2>
              <p className="text-xl text-muted-foreground">Discover what makes our climbing gym special</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">World-Class Walls</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    45-foot tall climbing walls with routes set by certified route setters, updated weekly for fresh
                    challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Inclusive Community</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Welcoming environment for climbers of all backgrounds, ages, and skill levels with supportive
                    community culture.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Expert Instruction</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Certified instructors and coaches providing personalized guidance for skill development and safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 opacity-90">
              Come experience our world-class climbing facility and become part of our supportive climbing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Camera className="w-4 h-4 mr-2" />
                Share your climbing photos with #PeakClimbGym
              </Badge>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
