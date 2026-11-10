"use client"

import * as React from "react"

export function StatsBanner() {
  const stats = [
    { value: "100K+", label: "Active Users" },
    { value: "1M+", label: "Links Created" },
    { value: "180+", label: "Countries" },
    { value: "99.9%", label: "Uptime" },
  ]

  return (
    <section className="w-full bg-[#5B21F3] py-7 sm:py-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
