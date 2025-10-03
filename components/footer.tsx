import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CS</span>
              </div>
              <span className="font-bold text-xl">Climb Spark</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the thrill of indoor rock climbing at our state-of-the-art facility. Perfect for beginners and
              experts alike.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/climb_spark_bouldering_gym" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
               <Link href="/" className="block text-gray-300 hover:text-primary transition-colors text-sm">
              Home
            </Link>
              <Link href="/about" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link href="/first-time" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                First-Time Visitors
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
              <Link href="/rules" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Facility Rules
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Classes & Programs</h3>
            <div className="space-y-2">
              <Link href="/classes/adult" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Adult Classes
              </Link>
              <Link href="/classes/kids" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Kids Programs
              </Link>
              <Link href="/classes/school" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                School Programs
              </Link>
              <Link
                href="/classes/academy"
                className="block text-gray-300 hover:text-primary transition-colors text-sm"
              >
                Academy
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Events & Calendar
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact & Newsletter</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  Kalewadi, Pune <br />
                  climbpark123clubgmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 95606 14795</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@climbsparkgym.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Climb Spark Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
