"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const phone = "261345709747" // Madagascar, no leading +
  const text = "Hello%20Nantenaina%2C%20I%27d%20like%20to%20plan%20a%20tour%20in%20Madagascar."
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
