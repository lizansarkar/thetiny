"use client"

import * as React from "react"
import Link from "next/link"
import { Link2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenAuth?: (mode: "login" | "signup") => void
}

export function Navbar({ onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="w-full relative z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#5B21F3] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Link2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-lg text-slate-950 tracking-tight">
              thetiny
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="#home"
              className="text-[#5B21F3] font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              About
            </Link>
            <Link
              href="#links"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 hover:text-slate-950 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth?.("login")}
              className="px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-white/80 hover:bg-white border border-slate-200/80 rounded-lg shadow-2xs transition-all hover:border-slate-300"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenAuth?.("signup")}
              className="px-4 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#5B21F3] hover:bg-[#4d16e0] rounded-lg shadow-xs transition-all hover:shadow-sm"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg border border-slate-200/80 bg-white/70"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/70 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#5B21F3] font-semibold py-1"
            >
              Home
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-950 py-1"
            >
              About
            </Link>
            <Link
              href="#links"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-950 py-1"
            >
              Blog
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-950 py-1"
            >
              Pricing
            </Link>
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth?.("login")
              }}
              className="w-full py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg text-center"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth?.("signup")
              }}
              className="w-full py-2 text-sm font-medium text-white bg-[#5B21F3] rounded-lg text-center shadow-xs"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
