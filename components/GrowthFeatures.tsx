"use client"

import * as React from "react"
import { Check } from "lucide-react"

export function GrowthFeatures() {
  const bulletPoints = [
    "Custom branded domains",
    "Real-time click analytics",
    "Password-protected links",
    "QR Code generator & API access",
    "Team & workspace collaboration",
  ]

  const metrics = [
    { label: "direct / organic", value: "2,345", percentage: 82 },
    { label: "twitter / social", value: "890", percentage: 54 },
    { label: "linkedin / referral", value: "420", percentage: 36 },
    { label: "facebook / social", value: "210", percentage: 18 },
  ]

  return (
    <section id="features" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="text-[#5B21F3] text-xs font-bold uppercase tracking-wider block mb-3">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Unlock powerful tools for serious growth.
            </h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
              Get key insights on who is clicking your links with our advanced
              analytics dashboard. Track countries, devices, UTM campaigns, and
              referrers to optimize your reach.
            </p>

            <ul className="mt-8 space-y-3.5">
              {bulletPoints.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Analytics Card */}
          <div className="relative">
            <div className="bg-[#5B21F3] text-white rounded-2xl p-7 sm:p-9 shadow-xl shadow-[#5B21F3]/20">
              <h3 className="text-xs font-bold tracking-wider text-purple-200 uppercase mb-8">
                REAL-TIME ANALYTICS DASHBOARD
              </h3>

              <div className="space-y-6">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                      <span className="text-purple-100">{metric.label}</span>
                      <span className="font-bold text-white tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-700"
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
