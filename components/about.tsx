import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Languages, MapPin, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      {/* Subtle background decoration */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Image Column with Decorative Elements */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-emerald-100/80" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/nantenaina.jpg"
                alt="Nantenaina - Local Madagascar Tour Guide"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-xl md:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">Experience</p>
              <p className="text-2xl font-black text-gray-900">10+ Years</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">Your Local Expert</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Meet Nantenaina
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              <span className="font-semibold text-emerald-700">Manao ahoana!</span> I’m a dedicated driver-guide with a deep-rooted passion for Madagascar’s unique biodiversity. 
              My mission is to help you discover the hidden gems of the Red Island—from the majestic baobabs to the playful lemurs—all through the eyes of a local.
            </p>

            {/* Quick Info Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Languages className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-700">English, French, Malagasy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-700">All regions of Madagascar</span>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="mt-10 space-y-4">
              {[
                "Personalized itineraries based on your pace",
                "Safe and reliable 4x4 private transportation",
                "Deep knowledge of wildlife and local customs"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote/Tip Card */}
            <Card className="mt-10 border-none bg-emerald-900 text-white shadow-xl">
              <CardContent className="flex gap-4 pt-6">
                <Award className="h-8 w-8 shrink-0 text-emerald-400" />
                <p className="text-sm leading-relaxed opacity-90">
                  &quot;Madagascar is a continent in an island. My goal is to make your journey smooth and meaningful, handling the logistics so you can embrace the adventure.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}