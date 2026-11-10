"use client"

import * as React from "react"
import {
  Zap,
  BarChart3,
  Globe,
  QrCode,
  ShieldCheck,
  Clock,
} from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Redirects happen in a fraction of a millisecond with global edge servers.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Track clicks, referrers, locations, devices, and UTM parameters.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Fast redirects from any location in the world with edge caching.",
    },
    {
      icon: QrCode,
      title: "QR Codes",
      description:
        "Generate customizable QR codes instantly for any shortened URL.",
    },
    {
      icon: ShieldCheck,
      title: "Secure",
      description:
        "Advanced protection against malware, phishing, and spam attacks.",
    },
    {
      icon: Clock,
      title: "Expiration Control",
      description:
        "Set expiration dates and click limits to manage sensitive links.",
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Our Platform?
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
            Everything you need to manage and scale your links
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:border-slate-200 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
