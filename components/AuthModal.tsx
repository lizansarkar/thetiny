"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Lock, ArrowRight } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  mode: "login" | "signup"
  onClose: () => void
  onToggleMode: (newMode: "login" | "signup") => void
}

export function AuthModal({
  isOpen,
  mode,
  onClose,
  onToggleMode,
}: AuthModalProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      mode === "login"
        ? `Logged in successfully as ${email}`
        : `Account created for ${email}!`
    )
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white border border-slate-100 rounded-2xl p-6 sm:p-8">
        <DialogHeader className="text-center">
          <div className="w-12 h-12 rounded-full bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-5 h-5 stroke-[2.2]" />
          </div>
          <DialogTitle className="text-xl font-extrabold text-slate-900 text-center tracking-tight">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-500 text-center">
            {mode === "login"
              ? "Login to manage, shorten, and track your links"
              : "Join 10,000+ creators who supercharge their workflow"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sarah Miller"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B21F3] text-slate-900 placeholder:text-slate-400"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B21F3] text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B21F3] text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 px-4 rounded-lg bg-[#5B21F3] hover:bg-[#4d16e0] text-white text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>{mode === "login" ? "Log In" : "Sign Up Free"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center mt-4 pt-4 border-t border-slate-100">
          {mode === "login" ? (
            <p className="text-xs text-slate-500">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => onToggleMode("signup")}
                className="text-[#5B21F3] font-semibold hover:underline cursor-pointer"
              >
                Sign up free
              </button>
            </p>
          ) : (
            <p className="text-xs text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => onToggleMode("login")}
                className="text-[#5B21F3] font-semibold hover:underline cursor-pointer"
              >
                Log in
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
