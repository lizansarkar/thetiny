"use client"

import * as React from "react"
import { Check, ArrowRight } from "lucide-react"

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "/ month",
      description: "Perfect for personal use and small projects.",
      isPopular: false,
      features: [
        "Up to 50 links per month",
        "Standard click analytics",
        "QR Code generator",
        "48-hour link history",
        "Community support",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "purple",
    },
    {
      name: "PRO",
      price: "$9",
      period: "/ month",
      description: "For creators, freelancers, and growing teams.",
      isPopular: true,
      features: [
        "Everything in Free, plus:",
        "Unlimited links per month",
        "Advanced click analytics",
        "UTM builder",
        "Custom branded domains",
        "Password link protection",
        "Priority support",
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonVariant: "white",
    },
    {
      name: "ENTERPRISE",
      price: "$29",
      period: "/ month",
      description: "For organizations and high-volume link sharing.",
      isPopular: false,
      features: [
        "Everything in Pro, plus:",
        "Dedicated account manager",
        "Custom domain SSL",
        "Team collaboration",
        "Up to 99.9% uptime SLA",
        "Advanced security",
        "Dedicated API access",
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "purple",
    },
  ]

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#5B21F3] text-xs font-bold uppercase tracking-wider block mb-2">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
            Choose the plan that fits your personal or business needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, idx) => {
            if (plan.isPopular) {
              return (
                <div
                  key={idx}
                  className="bg-[#5B21F3] text-white rounded-2xl p-7 sm:p-8 shadow-xl shadow-[#5B21F3]/25 md:-translate-y-2 flex flex-col justify-between relative border border-transparent"
                >
                  <div>
                    <span className="text-xs font-bold text-purple-200 tracking-wider uppercase">
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <span className="text-4xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-normal text-purple-200">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-xs text-purple-100 leading-relaxed min-h-[32px]">
                      {plan.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs font-medium text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan?.(plan.name)}
                    className="mt-8 w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-50 text-[#5B21F3] text-xs sm:text-sm font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )
            }

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 shadow-2xs hover:border-slate-200 flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-2 mb-2">
                    <span className="text-4xl font-black text-slate-950 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-normal text-slate-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan?.(plan.name)}
                  className="mt-8 w-full py-2.5 px-4 rounded-lg bg-[#5B21F3] hover:bg-[#4d16e0] text-white text-xs sm:text-sm font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
