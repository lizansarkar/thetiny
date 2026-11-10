"use client"

import * as React from "react"
import { Star } from "lucide-react"

export function TestimonialSection() {
  const testimonial = {
    stars: 5,
    quote: "The best platform for URL management!",
    author: "Rachel Ross",
    role: "CEO at Designify",
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#5B21F3] text-xs font-bold uppercase tracking-wider block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonials 3-Column Grid matching reference layout with Card 1 on the left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:border-slate-200 hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              {/* 5 Purple Stars */}
              <div className="flex items-center gap-1 mb-3.5">
                {[...Array(testimonial.stars)].map((_, sIdx) => (
                  <Star
                    key={sIdx}
                    className="w-4 h-4 fill-[#5B21F3] text-[#5B21F3]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-800 text-sm font-medium leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {testimonial.author}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">{testimonial.role}</p>
            </div>
          </div>

          {/* Empty columns 2 and 3 matching the reference layout */}
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
