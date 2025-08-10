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

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
  if (!formspreeId) {
    throw new Error("NEXT_PUBLIC_FORMSPREE_ID manquant")
    return 
  }
 

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg(null)

    // Basic validation
    if (!name || !email || !message) {
      setStatus("error")
      setErrorMsg("Please fill out your name, email, and message.")
      return
    }

    // Try Formspree first if configured
    if (formspreeId) {
      try {
        setStatus("sending")
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: "Tour Inquiry via Website",
          }),
        })
        if (res.ok) {
          setStatus("success")
          setName("")
          setEmail("")
          setMessage("")
          return
        } else {
          const data = await res.json().catch(() => ({}))
          throw new Error(data?.error || "Failed to send (Formspree).")
        }
      } catch (err: any) {
        setStatus("error")
        setErrorMsg(err?.message || "Something went wrong while sending your message.")
        return
      }
    }

    // Fallback: open the user's email client (mailto)
    const subject = encodeURIComponent("Tour Inquiry via Website")
    const body = encodeURIComponent(`Hello Nantenaina,

      My name is ${name}.

      ${message}

      You can reach me at: ${email}`)
          window.location.href = `mailto:anicet22.aps2a@gmail.com?subject=${subject}&body=${body}`
          setStatus("idle")
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-gray-700">
              Share your travel dates and interests, and I’ll craft a personalized plan.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-800">
                <Phone className="h-4 w-4 text-emerald-600" />
                <a href="tel:+261341234567" className="hover:underline">
                  +261 34 57 097 7
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                <Mail className="h-4 w-4 text-emerald-600" />
                <a href="mailto:nantenaina.tours@gmail.com" className="hover:underline">
                  nantenaina.tours@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
              Prefer WhatsApp? Tap the green button bottom-right to message instantly.
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your ideal trip (dates, interests, group size)..."
                  required
                />
              </div>
              <Button type="submit" disabled={status === "sending"} className="bg-emerald-600 hover:bg-emerald-700">
                {status === "sending" ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
              {!process.env.NEXT_PUBLIC_FORMSPREE_ID && (
                <p className="text-xs text-gray-500">
                  Tip: To enable on-site sending without opening your email client, set NEXT_PUBLIC_FORMSPREE_ID in your
                  project settings and it will submit via Formspree automatically.
                </p>
              )}
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
                <AlertDescription>
                  {errorMsg || "Please try again or contact me via email or WhatsApp."}
                </AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
