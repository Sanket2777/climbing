import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { QuickInfoBox } from "@/components/quick-info-box"
import { UpcomingEvents } from "@/components/upcoming-events"
import { ClassesHighlight } from "@/components/classes-highlight"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <HeroSlider />

        <QuickInfoBox />

        <UpcomingEvents />

        <ClassesHighlight />
      </main>

      <Footer />
    </div>
  )
}
