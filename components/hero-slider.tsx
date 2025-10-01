"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "/indoor-rock-climbing-wall-with-colorful-holds.jpg",
    title: "Reach New Heights",
    subtitle: "Experience the thrill of indoor rock climbing",
    cta: "Start Climbing Today",
  },
  {
    id: 2,
    image: "/group-of-people-bouldering-in-climbing-gym.jpg",
    title: "Climb Together",
    subtitle: "Join our community of passionate climbers",
    cta: "Join Our Community",
  },
  {
    id: 3,
    image: "/kids-climbing-wall-with-safety-equipment.jpg",
    title: "Kids Love Climbing",
    subtitle: "Safe and fun programs for young adventurers",
    cta: "Kids Programs",
  },
 {
    id: 2,
    image: "/1.jpeg",
    title: "Climb Together",
    subtitle: "Join our community of passionate climbers",
    cta: "Join Our Community",
  },
  {
    id: 3,
    image: "/2.jpeg",
    title: "Climb Together",
    subtitle: "Join our community of passionate climbers",
    cta: "Join Our Community",
  },
  {
    id: 4,
    image: "/3.jpeg",
    title: "Climb Together",
    subtitle: "Join our community of passionate climbers",
    cta: "Join Our Community",
  },
  {
    id: 5,
    image: "/4.jpeg",
    title: "Climb Together",
    subtitle: "Join our community of passionate climbers",
    cta: "Join Our Community",
  },
 
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{slide.subtitle}</p>
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/contact">{slide.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
