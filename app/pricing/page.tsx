import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const dayPasses = [
  {
    title: "Adult Day Pass",
    price: " ₹2500.00",
    description: "Full day access to all climbing areas",
    features: ["All climbing walls", "Equipment rental included", "Valid for one day", "Safety briefing included"],
  },
  {
    title: "Student Day Pass",
    price: " ₹1800.00",
    description: "Discounted rate for students with valid ID",
    features: ["All climbing walls", "Equipment rental included", "Valid for one day", "Must show student ID"],
  },
  {
    title: "Youth Day Pass",
    price: " ₹1500.00",
    description: "For climbers under 18 years old",
    features: ["All climbing walls", "Equipment rental included", "Valid for one day", "Ages 5-17"],
  },
]

const memberships = [
  {
    title: "Basic Membership",
    price: "₹7999",
    period: "/month",
    description: "Perfect for regular climbers",
    features: [
      "Unlimited climbing access",
      "Equipment rental included",
      "10% discount on classes",
      "Guest passes: 2 per month",
      "No contract required",
    ],
    popular: false,
  },
  {
    title: "Premium Membership",
    price: " ₹14999",
    period: "/month",
    description: "Best value for serious climbers",
    features: [
      "Unlimited climbing access",
      "Equipment rental included",
      "20% discount on classes",
      "Guest passes: 4 per month",
      "Free gear storage locker",
      "Priority class booking",
    ],
    popular: true,
  },
  {
    title: "Family Membership",
    price: " ₹29999",
    period: "/month",
    description: "Great for families with 2+ climbers",
    features: [
      "Up to 4 family members",
      "Unlimited climbing access",
      "Equipment rental included",
      "15% discount on classes",
      "Guest passes: 6 per month",
      "Family event invitations",
    ],
    popular: false,
  },
]

const groupPackages = [
  {
    title: "Birthday Party Package",
    price: " ₹25999",
    description: "Perfect for birthday celebrations",
    features: [
      "2-hour private climbing session",
      "Up to 10 participants",
      "Equipment included",
      "Dedicated party area",
      "Basic decorations provided",
      "Add-on food packages available",
    ],
  },
  {
    title: "Corporate Team Building",
    price: " ₹4599",
    description: "Per person (minimum 8 people)",
    features: [
      "3-hour team building session",
      "Professional facilitation",
      "Equipment included",
      "Team challenges and games",
      "Meeting space available",
      "Catering options available",
    ],
  },
  {
    title: "School Group Program",
    price: " ₹2000",
    description: "Per student (minimum 15 students)",
    features: [
      "Educational climbing session",
      "Safety instruction included",
      "Equipment provided",
      "Certified instructors",
      "Curriculum tie-ins available",
      "Teacher resources provided",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pricing & Memberships</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the perfect option for your climbing adventure. All prices include equipment rental and safety
              briefing.
            </p>
          </div>
        </section>

        {/* Day Passes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Day Passes</h2>
              <p className="text-xl text-muted-foreground">Perfect for trying climbing or occasional visits</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dayPasses.map((pass) => (
                <Card key={pass.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pass.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pass.price}</div>
                    <p className="text-muted-foreground">{pass.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pass.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Purchase Pass</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Monthly Memberships</h2>
              <p className="text-xl text-muted-foreground">
                Save money and climb more with our flexible membership options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberships.map((membership) => (
                <Card
                  key={membership.title}
                  className={`hover:shadow-lg transition-shadow relative ${membership.popular ? "border-primary shadow-lg" : ""}`}
                >
                  {membership.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{membership.title}</CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-primary">{membership.price}</span>
                      <span className="text-muted-foreground">{membership.period}</span>
                    </div>
                    <p className="text-muted-foreground">{membership.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {membership.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={membership.popular ? "default" : "outline"}>
                      <Link href="/contact">Join Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Group Packages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Group Packages</h2>
              <p className="text-xl text-muted-foreground">
                Special rates for parties, corporate events, and school groups
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {groupPackages.map((package_) => (
                <Card key={package_.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{package_.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{package_.price}</div>
                    <p className="text-muted-foreground">{package_.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {package_.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Book Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Climbing shoes rental
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Harness rental
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Chalk and chalk bag
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Safety briefing
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Access to all climbing areas
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Membership Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    No daily fees
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Discounts on classes and gear
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Guest pass privileges
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Priority event registration
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Cancel anytime (no contract)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
