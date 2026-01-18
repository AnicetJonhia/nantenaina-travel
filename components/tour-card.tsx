"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import Image from "next/image"

export type TourCardProps = {
  title?: string
  location?: string
  images?: string[] 
  highlights?: string[]

}

export function TourCard({
  title = "Sample Tour",
  location = "Madagascar",
  images = ["/images/tour1.jpg", "/images/tour2.jpg", "/images/tour3.jpg"], // Tableau par défaut
  highlights = ["Wildlife", "Culture"]
  }: TourCardProps) {

   const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonctions de navigation
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <Card className="flex flex-col overflow-hidden group border-none shadow-md hover:shadow-xl transition-shadow">
      {/* Image principale sur la carte */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute bottom-2 right-2">
          <Badge className="bg-black/50 backdrop-blur-md border-none flex gap-1 items-center">
            <ImageIcon className="h-3 w-3" /> {images.length}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </CardHeader>

      <CardContent className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <Badge key={h} variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none">
              {h}
            </Badge>
          ))}
        </div>

        <Dialog 
            open={open} 
            onOpenChange={(val) => {
              setOpen(val);            
              if (val) setCurrentIndex(0); 
            }}
          >
          <DialogTrigger asChild>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
              View Details & Gallery
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-3xl w-[95vw] p-0 overflow-hidden border-none bg-white">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <p className="text-emerald-600 flex items-center gap-1 text-sm">
                <MapPin className="h-3 w-3" /> {location}
              </p>
            </DialogHeader>

            <div className="p-6 space-y-6">
              {/* Galerie d'images interactive */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                <Image 
                  src={images[currentIndex]} 
                  alt={`${title} - image ${currentIndex + 1}`} 
                  fill 
                  className="object-contain" // Contain pour voir toute l'image sans rogner
                />
                
                {/* Contrôles de navigation (si plus d'une image) */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>
                    
                    {/* Indicateur de position */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
                      {currentIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Miniatures (Thumbnails) pour accès rapide */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-transparent opacity-60'}`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>

              
             <div className="flex justify-end">
                <Button asChild onClick={() => setOpen(false)}  className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <span>Close Gallery</span>
                </Button>
              </div>       
              
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}