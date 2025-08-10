"use client"

import Image from "next/image"
import { useEffect, useMemo, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type GalleryItem = { src: string; alt: string }

const allImages: GalleryItem[] = [
  { src: "/images/gallery-1.png", alt: "Avenue of the Baobabs at sunset" },
  { src: "/images/gallery-2.png", alt: "Indri lemur in Andasibe rainforest" },
  { src: "/images/gallery-3.png", alt: "Tsingy de Bemaraha limestone pinnacles" },
  { src: "/images/gallery-4.png", alt: "Nosy Be turquoise water and boats" },
  { src: "/images/gallery-5.png", alt: "Panther chameleon on a branch" },
  { src: "/images/gallery-6.png", alt: "Zebu cart on a sandy track" },
  { src: "/images/gallery-7.png", alt: "Traditional Malagasy fishing pirogue" },
  { src: "/images/gallery-8.png", alt: "Ring-tailed lemurs basking in the sun" },
  { src: "/images/gallery-9.png", alt: "Baobab alley under a starry night" },
  { src: "/images/gallery-10.png", alt: "Red tsingy formations near Antsiranana" },
  { src: "/images/gallery-11.png", alt: "Local market with colorful spices" },
  { src: "/images/gallery-12.png", alt: "Coastal village with palm-fringed beach" },
]

export function GallerySection() {
  const [expanded, setExpanded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const initialCount = 6
  const images = useMemo(() => allImages, [])
  const initialImages = useMemo(() => images.slice(0, initialCount), [images])

  const openLightbox = useCallback((indexInAll: number) => {
    setCurrentIndex(indexInAll)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxOpen, goPrev, goNext, closeLightbox])

  return (
    <section id="gallery" className="bg-emerald-50/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Gallery</h2>
            <p className="mt-2 max-w-2xl text-gray-700">
              Moments from the road—wildlife, landscapes, and daily life across Madagascar.
            </p>
          </div>
          <Button
            variant={expanded ? "secondary" : "default"}
            className={expanded ? "" : "bg-emerald-600 hover:bg-emerald-700"}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "See less" : "See more"}
          </Button>
        </div>

        {!expanded ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {initialImages.map((img, idx) => {
              const indexInAll = idx // same ordering
              return (
                <button
                  key={img.src}
                  className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  onClick={() => openLightbox(indexInAll)}
                  aria-label={`Open image: ${img.alt}`}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </button>
              )
            })}
          </div>
        ) : (
          <div className="mt-6">
            <ScrollArea className="w-full whitespace-nowrap rounded-lg border bg-white">
              <div className="flex gap-3 p-3">
                {images.map((img, idx) => (
                  <button
                    key={img.src}
                    className="relative h-40 w-40 flex-none overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    onClick={() => openLightbox(idx)}
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        )}

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-3xl p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Image preview</DialogTitle>
            </DialogHeader>
            <Card className="overflow-hidden">
              <div className="relative">
                <button
                  className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
                  onClick={closeLightbox}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative h-[60vh] w-full bg-black">
                  <Image
                    src={images[currentIndex].src || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    className="m-3 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
                    onClick={goPrev}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className="m-3 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
                    onClick={goNext}
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <CardContent className="flex items-center justify-between gap-3 p-4">
                <p className="text-sm text-gray-700">{images[currentIndex].alt}</p>
                <p className="text-xs text-gray-500">{`${currentIndex + 1} / ${images.length}`}</p>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
