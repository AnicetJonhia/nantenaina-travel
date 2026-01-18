"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: "#about", label: "About" },
    { href: "#tours", label: "Destinations" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#hero" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">N</span>
          <span className="tracking-tight">Nantenaina Travel</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
          ))}
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="#contact">Contact Me</a>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a aria-label="Call" href="tel:+261345709747" className="text-gray-700">
            <Phone className="h-5 w-5" />
          </a>
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className={cn("md:hidden border-t bg-white", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-gray-700">
              {item.label}
            </a>
          ))}
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
