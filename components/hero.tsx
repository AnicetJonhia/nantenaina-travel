import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-madagascar.png"
          alt="Sunset over Madagascar's Avenue of the Baobabs"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Leaf className="h-3.5 w-3.5" />
            <span>{"Authentic, private travel across Madagascar"}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Discover Madagascar with Nantenaina</h1>
          <p className="mt-4 text-lg text-white/90">
            Car rental in Madagascar with a personal driver-guide. Explore the island unique wildlife, stunning landscapes, and rich culture on tailor-made private tours.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#tours">Explore Tours</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Plan Your Trip
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
