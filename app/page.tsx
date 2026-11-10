"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { StatsBanner } from "@/components/StatsBanner"
import { PopularLinks } from "@/components/PopularLinks"
import { GrowthFeatures } from "@/components/GrowthFeatures"
import { PricingSection } from "@/components/PricingSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Footer } from "@/components/Footer"
import { QrModal } from "@/components/QrModal"
import { AuthModal } from "@/components/AuthModal"

export default function Page() {
  const [selectedQrUrl, setSelectedQrUrl] = React.useState<string | null>(null)
  const [authModalState, setAuthModalState] = React.useState<{
    isOpen: boolean
    mode: "login" | "signup"
  }>({
    isOpen: false,
    mode: "login",
  })

  const openAuth = (mode: "login" | "signup") => {
    setAuthModalState({ isOpen: true, mode })
  }

  const closeAuth = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }))
  }

  const toggleAuthMode = (mode: "login" | "signup") => {
    setAuthModalState({ isOpen: true, mode })
  }

  const handleSelectPlan = (planName: string) => {
    openAuth(planName === "FREE" ? "signup" : "signup")
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-white text-slate-900 selection:bg-[#EDE8FE] selection:text-[#5B21F3]">
      {/* 1. Header & Navigation */}
      <Navbar onOpenAuth={openAuth} />

      {/* Main Content Sections matching reference layout */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenAuth={openAuth} />

        {/* 3. Metrics / Stats Bar */}
        <StatsBanner />

        {/* 4. Most Popular Links */}
        <PopularLinks onOpenQr={(url) => setSelectedQrUrl(url)} />

        {/* 5. Features & Analytics Dashboard */}
        <GrowthFeatures />

        {/* 6. Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. Testimonials */}
        <TestimonialSection />

        {/* 8. Why Choose Our Platform? */}
        <WhyChooseUs />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QrModal
        url={selectedQrUrl}
        isOpen={Boolean(selectedQrUrl)}
        onClose={() => setSelectedQrUrl(null)}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        mode={authModalState.mode}
        onClose={closeAuth}
        onToggleMode={toggleAuthMode}
      />
    </div>
  )
}
