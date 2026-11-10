"use client"

import * as React from "react"
import { Copy, Check, QrCode, MousePointerClick, ExternalLink } from "lucide-react"

export interface LinkItem {
  id: string
  shortUrl: string
  longUrl: string
  clicks: string
}

interface PopularLinksProps {
  onOpenQr?: (url: string) => void
}

export function PopularLinks({ onOpenQr }: PopularLinksProps) {
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const links: LinkItem[] = [
    {
      id: "1",
      shortUrl: "https://thetiny.link/growth-hub",
      longUrl:
        "https://yourbrand.com/blog/how-to-scale-your-saas-startup-in-2024-complete-guide...",
      clicks: "12.5k clicks",
    },
    {
      id: "2",
      shortUrl: "https://thetiny.link/design-system",
      longUrl:
        "https://figma.com/file/12345/complete-modern-design-system-tokens-components...",
      clicks: "9.2k clicks",
    },
    {
      id: "3",
      shortUrl: "https://thetiny.link/summer-sale",
      longUrl:
        "https://store.brand.com/products/summer-clearance-collection-discount-coupon...",
      clicks: "7.8k clicks",
    },
    {
      id: "4",
      shortUrl: "https://thetiny.link/dev-docs",
      longUrl:
        "https://docs.api-service.io/v2/getting-started/authentication-and-quickstart...",
      clicks: "5.4k clicks",
    },
    {
      id: "5",
      shortUrl: "https://thetiny.link/portfolio",
      longUrl:
        "https://behance.net/gallery/creative-direction-branding-portfolio-showcase...",
      clicks: "3.1k clicks",
    },
  ]

  const handleCopy = (id: string, url: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(url)
    }
    setCopiedId(id)
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  return (
    <section id="links" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Most Popular Links
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Check out the most clicked links across our platform
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-3">
          {links.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-xl p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:border-slate-200/90 hover:shadow-xs transition-all overflow-hidden"
            >
              {/* Left URL info */}
              <div className="min-w-0 flex-1 overflow-hidden">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B21F3] hover:underline font-semibold text-sm sm:text-base tracking-tight truncate block group"
                >
                  {item.shortUrl}
                </a>
                <p className="text-xs text-slate-400 truncate mt-0.5 max-w-[260px] sm:max-w-lg">
                  {item.longUrl}
                </p>
              </div>

              {/* Right actions & clicks */}
              <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 justify-between sm:justify-end pt-1 sm:pt-0">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                  <MousePointerClick className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
                  <span>{item.clicks}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(item.id, item.shortUrl)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5B21F3] hover:bg-[#4d16e0] text-white text-xs font-semibold shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenQr?.(item.shortUrl)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
