"use client"

import * as React from "react"
import { Lock, LogIn, ArrowRight, Wand2 } from "lucide-react"

interface HeroSectionProps {
  onOpenAuth?: (mode: "login" | "signup") => void
}

export function HeroSection({ onOpenAuth }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-6 pb-20 sm:pb-28 overflow-hidden">
      {/* Soft gradient background glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(91, 33, 243, 0.08), transparent 70%), linear-gradient(180deg, #F4F5FD 0%, #FAFAFE 60%, #FFFFFF 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE8FE] text-[#5B21F3] text-xs font-semibold mb-6 shadow-2xs">
          <Wand2 className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>URL Shortener & Link Management</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
          Shorten Your URL
          <span className="block text-[#5B21F3] mt-1 sm:mt-1.5">in seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-slate-500 text-xs sm:text-base max-w-lg mx-auto leading-relaxed px-2">
          Create short, memorable links that you can share anywhere.
          <br className="hidden sm:inline" />
          Track every click with powerful analytics.
        </p>

        {/* Floating Hero Card */}
        <div className="mt-8 sm:mt-10 max-w-xl mx-auto bg-white rounded-2xl p-5 sm:p-9 border border-slate-100 shadow-[0_12px_45px_rgba(91,33,243,0.06)] relative">
          {/* Lavender lock circle */}
          <div className="w-12 h-12 rounded-full bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center mx-auto mb-4">
            <Lock className="w-5 h-5 stroke-[2.2]" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Login to make your URL short
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Join 10,000+ creators who use our URL shortener to make powerful
            short links, track real-time analytics, and more.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-sm mx-auto">
            <button
              onClick={() => onOpenAuth?.("login")}
              className="px-5 py-2.5 rounded-lg bg-[#5B21F3] hover:bg-[#4d16e0] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all hover:shadow-md cursor-pointer active:scale-[0.98]"
            >
              <LogIn className="w-4 h-4 stroke-[2.2]" />
              <span>Log In to Make URL</span>
            </button>
            <button
              onClick={() => onOpenAuth?.("signup")}
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-[#EDE8FE]/40 text-[#5B21F3] border border-[#5B21F3] text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Sign Up Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
