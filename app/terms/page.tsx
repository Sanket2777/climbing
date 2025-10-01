import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: March 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Peak Climb Gym facilities, you agree to be bound by these Terms and Conditions. If you do not
                agree to these terms, you may not use our facilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Facility Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Peak Climb Gym provides indoor rock climbing facilities for recreational use. All users must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Complete a safety briefing before first use</li>
                <li>Sign a liability waiver</li>
                <li>Follow all posted rules and staff instructions</li>
                <li>Use equipment properly and safely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Assumption of Risk</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rock climbing is an inherently dangerous activity that involves risk of serious injury or death. By
                participating, you acknowledge and assume all risks associated with climbing activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Liability Limitation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Peak Climb Gym, its owners, employees, and agents shall not be liable for any injury, loss, or damage
                arising from your use of the facilities, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Membership Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Membership terms include:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Monthly memberships are billed automatically</li>
                <li>Memberships can be cancelled with 30 days notice</li>
                <li>No refunds for partial months</li>
                <li>Membership benefits are non-transferable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Code of Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                All users must maintain respectful behavior. Peak Climb Gym reserves the right to refuse service or
                terminate membership for violations of our code of conduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on our website and take
                effect immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at info@peakclimb.com or (555) 123-CLIMB.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
