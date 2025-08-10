import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="bg-emerald-50/50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src="/images/nantenaina.jpg"
            alt="Portrait of local Madagascar tour guide, Nantenaina"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Meet Nantenaina</h2>
          <p className="mt-4 text-gray-700">
            Manao ahoana! I’m Nantenaina, a licensed tour guide from Madagascar with a passion for sharing our
            incredible biodiversity and culture. For years, I’ve helped travelers experience the magic of lemurs,
            baobabs, rainforests, tsingy formations, and turquoise seas—at your pace, your style.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Licensed Guide</Badge>
            <Badge variant="secondary">English · French · Malagasy</Badge>
            <Badge variant="secondary">Tailor‑made Itineraries</Badge>
            <Badge variant="secondary">Small Groups & Families</Badge>
          </div>
          <Card className="mt-6">
            <CardContent className="pt-6 text-sm text-gray-700">
              Tip: Traveling Madagascar takes time. I plan efficient routes, reliable transports, and hand‑picked
              stays—so you can focus on the fun.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
