"use client"

import Image from "next/image"
import { useEffect, useState, useCallback, useMemo } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Maximize2, Camera } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type GalleryItem = { src: string; alt: string; category?: string }

const allImages: GalleryItem[] = [
  { src: "/images/gallery-1.png", alt: "Avenue of the Baobabs at sunset", category: "Landscapes" },
  { src: "/images/gallery-2.png", alt: "Indri lemur in Andasibe", category: "Wildlife" },
  { src: "/images/gallery-3.png", alt: "Tsingy de Bemaraha", category: "Nature" },
  { src: "/images/gallery-4.png", alt: "Nosy Be turquoise water", category: "Nature" },
  { src: "/images/gallery-5.png", alt: "Panther chameleon", category: "Wildlife" },
  { src: "/images/gallery-6.png", alt: "Zebu cart on a sandy track", category: "Culture" },
  { src: "/images/gallery-7.png", alt: "Traditional fishing pirogue", category: "Culture" },
  { src: "/images/gallery-8.png", alt: "Ring-tailed lemurs", category: "Wildlife" },
  { src: "/images/gallery-9.png", alt: "Baobab alley at night", category: "Landscapes" },
  { src: "/images/gallery-10.png", alt: "Red tsingy formations", category: "Nature" },
  { src: "/images/gallery-11.png", alt: "Local spice market", category: "Culture" },
  { src: "/images/gallery-12.png", alt: "Coastal village", category: "Landscapes" },
]

export function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  
  const itemsPerPage = 4
  const totalPages = Math.ceil(allImages.length / itemsPerPage)

  // Calculate the images for the current page
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return allImages.slice(start, start + itemsPerPage)
  }, [currentPage])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null))
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : null))
  }, [])

  // Keyboard support
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "Escape") setLightboxIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, goPrev, goNext])

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center gap-2 text-emerald-600 mb-4">
            <Camera className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Memories</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A photographic journey through Madagascar's most beautiful spots.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {currentItems.map((img, idx) => {
            // Important: calculate global index for the lightbox
            const globalIndex = (currentPage - 1) * itemsPerPage + idx
            
            return (
              <div
                key={img.src}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
                onClick={() => setLightboxIndex(globalIndex)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-6 w-6 text-white" />
                </div>
                {img.category && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase text-gray-900 shadow-sm">
                    {img.category}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#gallery"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    href="#gallery"
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  href="#gallery"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
          <DialogContent className="max-w-5xl border-none bg-black/95 p-0 overflow-hidden shadow-2xl">
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            
            {lightboxIndex !== null && (
              <div className="relative flex h-[80vh] w-full flex-col items-center justify-center">
                <button
                  className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  onClick={() => setLightboxIndex(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative h-full w-full p-4 sm:p-12">
                  <Image
                    src={allImages[lightboxIndex].src}
                    alt={allImages[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
                  <ChevronRight className="h-8 w-8" />
                </button>

                <div className="absolute bottom-6 text-center text-white px-4">
                  <p className="text-lg font-medium">{allImages[lightboxIndex].alt}</p>
                  <p className="text-sm text-gray-400">{lightboxIndex + 1} / {allImages.length}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  )
}