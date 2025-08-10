import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-emerald-50/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf className="h-4 w-4" />
          </span>
          <span>
            {"© "}
            {new Date().getFullYear()}
            {" Nantenaina Tours. All rights reserved."}
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#hero" className="text-gray-600 hover:text-gray-900">
            Top
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#tours" className="text-gray-600 hover:text-gray-900">
            Tours
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
