"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg(null)
    setStatus("sending")

    if (!name || !email || !message) {
      setStatus("error")
      setErrorMsg("Please fill out all fields.")
      return
    }

    try {
    
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error(result.error || "Failed to send")
      }
    } catch (error) {
      setStatus("error")
      setErrorMsg("Could not send the email. Please try WhatsApp or email directly.")
    }
  }


  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Colonne de gauche : Infos */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-gray-700">
              Share your travel dates and interests, and I’ll craft a personalized plan.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-800">
                <Phone className="h-4 w-4 text-emerald-600" />
                <a href="tel:+261345709747" className="hover:underline">+261 34 57 097 7</a>
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                <Mail className="h-4 w-4 text-emerald-600" />
                <a href="mailto:nantenaina-travel@gmail.com" className="hover:underline">nantenaina-travel@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Colonne de droite : Formulaire */}
          <form onSubmit={onSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your trip..." required />
              </div>
              
              <Button type="submit" disabled={status === "sending"} className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
            </div>

            {status === "success" && (
              <Alert className="mt-4 border-emerald-200 bg-emerald-50 text-emerald-900">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Message sent</AlertTitle>
                <AlertDescription>Thank you! I’ll get back to you shortly.</AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Unable to send</AlertTitle>
                <AlertDescription>{errorMsg}</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}