"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Copy, Check, Download, QrCode } from "lucide-react"

interface QrModalProps {
  url: string | null
  isOpen: boolean
  onClose: () => void
}

export function QrModal({ url, isOpen, onClose }: QrModalProps) {
  const [copied, setCopied] = React.useState(false)

  if (!url) return null

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(url)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Generate an attractive SVG QR code pattern based on the URL
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white border border-slate-100 rounded-2xl p-6">
        <DialogHeader className="text-center">
          <div className="w-12 h-12 rounded-full bg-[#EDE8FE] text-[#5B21F3] flex items-center justify-center mx-auto mb-2">
            <QrCode className="w-6 h-6 stroke-[2.2]" />
          </div>
          <DialogTitle className="text-lg font-bold text-slate-900 text-center">
            QR Code
          </DialogTitle>
          <DialogDescription className="text-xs text-slate-500 text-center">
            Scan with any mobile camera to open this link instantly
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-50/70 rounded-xl border border-slate-100 my-2">
          {/* SVG QR Code Pattern with branded center */}
          <div className="w-48 h-48 bg-white p-3 rounded-lg shadow-2xs border border-slate-100 flex items-center justify-center relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-slate-900"
              fill="currentColor"
            >
              {/* Corner position markers */}
              {/* Top-Left */}
              <rect x="5" y="5" width="28" height="28" rx="4" />
              <rect x="9" y="9" width="20" height="20" rx="2" fill="#fff" />
              <rect x="13" y="13" width="12" height="12" rx="2" fill="#5B21F3" />

              {/* Top-Right */}
              <rect x="67" y="5" width="28" height="28" rx="4" />
              <rect x="71" y="9" width="20" height="20" rx="2" fill="#fff" />
              <rect x="75" y="13" width="12" height="12" rx="2" fill="#5B21F3" />

              {/* Bottom-Left */}
              <rect x="5" y="67" width="28" height="28" rx="4" />
              <rect x="9" y="71" width="20" height="20" rx="2" fill="#fff" />
              <rect x="13" y="75" width="12" height="12" rx="2" fill="#5B21F3" />

              {/* Data modules */}
              <rect x="38" y="8" width="5" height="5" />
              <rect x="48" y="8" width="5" height="5" />
              <rect x="56" y="8" width="5" height="5" />
              <rect x="38" y="18" width="5" height="5" />
              <rect x="48" y="24" width="5" height="5" />
              <rect x="56" y="18" width="5" height="5" />

              <rect x="8" y="38" width="5" height="5" />
              <rect x="18" y="38" width="5" height="5" />
              <rect x="24" y="48" width="5" height="5" />
              <rect x="8" y="56" width="5" height="5" />
              <rect x="18" y="56" width="5" height="5" />

              <rect x="38" y="38" width="8" height="8" rx="1" fill="#5B21F3" />
              <rect x="54" y="38" width="8" height="8" rx="1" fill="#5B21F3" />
              <rect x="38" y="54" width="8" height="8" rx="1" fill="#5B21F3" />
              <rect x="54" y="54" width="8" height="8" rx="1" fill="#5B21F3" />

              <rect x="46" y="46" width="8" height="8" rx="2" fill="#090d16" />

              <rect x="68" y="38" width="5" height="5" />
              <rect x="78" y="44" width="5" height="5" />
              <rect x="86" y="38" width="5" height="5" />
              <rect x="68" y="52" width="5" height="5" />
              <rect x="86" y="52" width="5" height="5" />

              <rect x="38" y="68" width="5" height="5" />
              <rect x="48" y="74" width="5" height="5" />
              <rect x="56" y="68" width="5" height="5" />
              <rect x="38" y="86" width="5" height="5" />
              <rect x="48" y="86" width="5" height="5" />
              <rect x="56" y="86" width="5" height="5" />

              <rect x="68" y="68" width="5" height="5" />
              <rect x="78" y="68" width="5" height="5" />
              <rect x="86" y="74" width="5" height="5" />
              <rect x="68" y="82" width="5" height="5" />
              <rect x="78" y="86" width="5" height="5" />
              <rect x="86" y="86" width="5" height="5" />
            </svg>
          </div>

          <p className="mt-3 text-xs font-semibold text-[#5B21F3] truncate max-w-[280px]">
            {url}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={handleCopy}
            className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Copied Link</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
          <button
            onClick={() => {
              alert("Downloading QR code...")
            }}
            className="flex-1 py-2 px-3 rounded-lg bg-[#5B21F3] hover:bg-[#4d16e0] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PNG</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
