import { Leaf, Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react"
import { CONTACT_INFO } from "@/lib/config" 

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-emerald-100 text-gray-700">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">N</span>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Nantenaina<span className="text-emerald-600"> Travel</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Your local expert guide in Madagascar. Crafting unique journeys through the red island&apos;s 
              landscapes, wildlife, and cultures since 2010.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.phone}`}  className="text-gray-400 hover:text-emerald-600 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-emerald-600 transition-colors">Popular Destinations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-600 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:ml-auto">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>{CONTACT_INFO.phoneLabel}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-emerald-600" />
                <a href="mailto:nantenaina.tours@gmail.com" className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-gray-500 italic mt-2">
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-gray-500">
          <p>© {currentYear} Nantenaina Tours. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}