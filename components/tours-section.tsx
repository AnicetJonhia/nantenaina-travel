import { TourCard } from "@/components/tour-card"
import { tours } from "@/lib/data"

export function ToursSection() {
  return (
    <section id="tours" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Popular Tours</h2>
          <p className="mt-3 text-gray-700">
            Every itinerary can be customized for your dates, pace, and interests. Ask me to tailor a trip for you.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <TourCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
