import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ava · UK",
    quote:
      "Unforgettable! Nantenaina knew the best spots for lemurs and quiet beaches. Everything was smooth and safe.",
  },
  {
    name: "Kenji · Japan",
    quote: "Great communication and thoughtful planning. We saw so much in a short time without feeling rushed.",
  },
  {
    name: "Lucía · Spain",
    quote:
      "Beautiful landscapes and amazing wildlife. The Avenue of the Baobabs at sunset was magical. Highly recommended!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">What Travelers Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <CardTitle className="text-base">{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">{t.quote}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
