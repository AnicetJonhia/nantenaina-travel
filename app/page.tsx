import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ToursSection } from "@/components/tours-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"

import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Nantenaina | Madagascar Tour Guide",
  description:
    "Private tours across Madagascar with a licensed local guide. Lemurs, baobabs, rainforests, beaches, and authentic Malagasy culture.",
  keywords: [
    "Madagascar tours",
    "Tour guide Madagascar",
    "Nantenaina",
    "Baobab Avenue",
    "Andasibe",
    "Tsingy",
    "Nosy Be",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nantenaina | Madagascar Tour Guide",
    description:
      "Private tours across Madagascar with a licensed local guide. Lemurs, baobabs, rainforests, beaches, and authentic Malagasy culture.",
    images: [{ url: "/images/hero-madagascar.png" }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <ToursSection />
      <GallerySection />
      <TestimonialsSection />
     
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
