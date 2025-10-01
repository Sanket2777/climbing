import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Users, Download } from "lucide-react"

const safetyRules = [
  "All climbers must complete a safety briefing before their first climb",
  "Proper climbing shoes must be worn at all times on the climbing walls",
  "Harnesses must be worn and properly fitted for all rope climbing",
  "Children under 14 must be supervised by an adult at all times",
  "No climbing above the safety line without proper belay",
  "Inspect all equipment before use - report any damage immediately",
  "Only one climber per route at a time",
  "Climb down, don't jump from bouldering walls",
  "Stay alert and aware of other climbers around you",
  "Follow all staff instructions immediately",
]

const facilityRules = [
  "Check in at the front desk before climbing",
  "Signed waiver required for all participants",
  "No outside food or drinks (water bottles allowed)",
  "Proper athletic attire required - no jeans or restrictive clothing",
  "Closed-toe shoes required in all areas",
  "No chalk on rental shoes",
  "Clean up after yourself - return all equipment",
  "Respect other climbers and maintain appropriate noise levels",
  "No photography of other climbers without permission",
  "Gym staff have final authority on all safety matters",
]

const behaviorGuidelines = [
  "Be respectful and encouraging to all climbers",
  "Share routes and equipment fairly",
  "Offer help and spot other climbers when appropriate",
  "Keep personal belongings in designated areas",
  "Report any unsafe behavior to staff immediately",
  "No profanity or inappropriate language",
  "No roughhousing or horseplay",
  "Respect the 'quiet zones' during classes",
  "Follow capacity limits in all areas",
  "Have fun and climb responsibly!",
]

export default function RulesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Facility Rules & Safety</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your safety is our top priority. Please read and follow all facility rules to ensure a safe and enjoyable
              experience for everyone.
            </p>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Safety Rules - MANDATORY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4 font-medium">
                  These safety rules are non-negotiable and must be followed by all climbers at all times.
                </p>
                <ul className="space-y-3">
                  {safetyRules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <span className="text-red-700 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facility Rules */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-primary" />
                  Facility Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  These rules help maintain a clean, safe, and welcoming environment for all our climbers.
                </p>
                <ul className="space-y-3">
                  {facilityRules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Behavior Guidelines */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our climbing community is built on mutual respect, encouragement, and shared passion for the sport.
                </p>
                <ul className="space-y-3">
                  {behaviorGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Waiver Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Liability Waiver Required</h2>
            <p className="text-xl mb-8 opacity-90">
              All climbers must sign a liability waiver before participating in any climbing activities. Minors require
              parent/guardian signature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Waiver
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Complete Online Waiver
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700">Emergency Procedures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-orange-700 mb-2">In Case of Injury:</h3>
                  <ul className="text-orange-600 space-y-1 text-sm">
                    <li>• Stop climbing immediately and do not move the injured person</li>
                    <li>• Alert gym staff immediately</li>
                    <li>• Clear the area around the injured climber</li>
                    <li>• Follow staff instructions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-700 mb-2">Emergency Contacts:</h3>
                  <ul className="text-orange-600 space-y-1 text-sm">
                    <li>• Emergency Services: 911</li>
                    <li>• Gym Emergency Line: (555) 123-HELP</li>
                    <li>• First Aid Station: Located at front desk</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
