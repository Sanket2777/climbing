import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: March 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Emergency contact information</li>
                <li>Payment information for memberships and services</li>
                <li>Waiver and medical information as required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide climbing services and manage your membership</li>
                <li>Process payments and communicate about your account</li>
                <li>Send important safety and facility updates</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only
                as necessary to provide services, comply with legal requirements, or protect safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to improve your browsing experience and analyze site usage. You can control
                cookie settings through your browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not knowingly collect personal information from children under 13 without parental consent.
                Parents/guardians must provide consent for minors to use our facilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy, please contact us at privacy@peakclimb.com or (555)
                123-CLIMB.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
