import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Clock, Users } from "lucide-react"

export function QuickInfoBox() {
  return (
    <section className="py-8 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <AlertCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">First-Time Visitors</h3>
              <p className="text-muted-foreground text-sm">
                All first-time climbers need a 15-minute safety briefing before climbing
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Open Daily</h3>
              <p className="text-muted-foreground text-sm">
                Mon-Fri: 6AM-10PM
                <br />
                Sat-Sun: 8AM-8PM
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">All Skill Levels</h3>
              <p className="text-muted-foreground text-sm">
                From complete beginners to advanced climbers - everyone is welcome
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
