"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    classType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required"
    if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required"
    if (!formData.classType) newErrors.classType = "Class/Event type is required"

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          classType: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Generate time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20,10 Q30,20 40,10 T60,10 T80,10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M15,30 Q25,40 35,30 T55,30 T75,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M25,50 Q35,60 45,50 T65,50 T85,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M10,70 Q20,80 30,70 T50,70 T70,70" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Book an Appointment</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your climbing journey? Schedule a session with our expert instructors and take the first
              step towards reaching new heights.
            </p>
          </div>
        </motion.section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <CardContent className="p-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-foreground mb-4">Appointment Booked!</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Thank you for booking with us! We've sent a confirmation email with all the details.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-800 font-medium">
                        What's next? Our team will contact you within 24 hours to confirm your appointment and answer
                        any questions.
                      </p>
                    </div>
                    <Button onClick={() => setSubmitStatus("idle")} size="lg">
                      Book Another Appointment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Schedule Your Session</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below to book your climbing session. All fields are required.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                        <p className="text-red-800 font-medium">
                          Sorry, there was an error booking your appointment. Please try again or contact us directly.
                        </p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className={errors.preferredDate ? "border-red-500" : ""}
                          />
                          {errors.preferredDate && <p className="text-sm text-red-600">{errors.preferredDate}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select
                            value={formData.preferredTime}
                            onValueChange={(value) => handleInputChange("preferredTime", value)}
                          >
                            <SelectTrigger className={errors.preferredTime ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.preferredTime && <p className="text-sm text-red-600">{errors.preferredTime}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="classType">Class/Event Type *</Label>
                        <Select
                          value={formData.classType}
                          onValueChange={(value) => handleInputChange("classType", value)}
                        >
                          <SelectTrigger className={errors.classType ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select class or event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kids-program">Kids Program</SelectItem>
                            <SelectItem value="adult-class">Adult Class</SelectItem>
                            <SelectItem value="academy">Academy</SelectItem>
                            <SelectItem value="group-booking">Group Booking</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.classType && <p className="text-sm text-red-600">{errors.classType}</p>}
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-blue-900 mb-1">Booking Information</h4>
                            <p className="text-sm text-blue-800">
                              Sessions are typically 1-2 hours long. We'll contact you within 24 hours to confirm
                              availability and provide additional details about your chosen program.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Booking..." : "Book Appointment"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
