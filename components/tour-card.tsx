"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin } from "lucide-react"
import Image from "next/image"

export type TourCardProps = {
  title?: string
  location?: string
  duration?: string
  priceFrom?: string
  image?: string
  highlights?: string[]
  itinerary?: string[]
}

export function TourCard({
  title = "Sample Tour",
  location = "Madagascar",
  duration = "2 days",
  priceFrom = "$300",
  image = "/madagascar-tour.png",
  highlights = ["Wildlife", "Culture"],
  itinerary = ["Day 1: Arrival", "Day 2: Explore"],
}: TourCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-xl">
          <span>{title}</span>
          <Badge className="bg-emerald-600 hover:bg-emerald-700">{priceFrom}</Badge>
        </CardTitle>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
          <span className="text-gray-400">•</span>
          <span>{duration}</span>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <Badge key={h} variant="outline">
              {h}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-md">
                  <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">Highlights</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                    {highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Sample Itinerary</h4>
                  <ol className="mt-2 list-decimal pl-5 text-sm text-gray-700">
                    {itinerary.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ol>
                </div>
                <div className="pt-2">
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <a href="#contact">Request This Tour</a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
