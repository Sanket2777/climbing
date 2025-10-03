"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50 relative">
            <Image
              src="/classes/c1.png"
              alt="Peak Climb Logo"
              width={150}
              height={150}
              className="rounded-md object-contain"
              priority
              style={{ backgroundColor: "black", marginRight: "200px" }}
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/first-time" className="text-foreground hover:text-primary transition-colors">
              First-Time Visitors
            </Link>

            {/* Classes Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Classes & Programs</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/classes/adult">Adult Classes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/classes/kids">Kids Programs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/classes/school">School/Group Programs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/classes/academy">Academy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/events" className="text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/videos" className="text-foreground hover:text-primary transition-colors">
              Videos
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            <Button asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/first-time" className="block py-2 text-foreground hover:text-primary transition-colors">
              First-Time Visitors
            </Link>
            <div className="pl-4 space-y-2">
              <p className="font-medium text-foreground">Classes & Programs</p>
              <Link
                href="/classes/adult"
                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Adult Classes
              </Link>
              <Link
                href="/classes/kids"
                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kids Programs
              </Link>
              <Link
                href="/classes/school"
                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                School/Group Programs
              </Link>
              <Link
                href="/classes/academy"
                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Academy
              </Link>
            </div>
            <Link href="/events" className="block py-2 text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/pricing" className="block py-2 text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/gallery" className="block py-2 text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/videos" className="block py-2 text-foreground hover:text-primary transition-colors">
              videos
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
