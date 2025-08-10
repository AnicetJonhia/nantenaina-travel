import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-emerald-50/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>When is the best time to visit Madagascar?</AccordionTrigger>
              <AccordionContent>
                April–November is generally drier with great wildlife viewing. The exact timing depends on the regions
                you plan to visit and your interests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What’s included in a private tour?</AccordionTrigger>
              <AccordionContent>
                Custom planning, guiding, transportation arrangements, and select activities. Hotels and meals can be
                included or recommended based on your budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you accommodate families or special interests?</AccordionTrigger>
              <AccordionContent>
                Yes—families, photographers, birders, and nature lovers are all welcome. I tailor the itinerary to your
                pace and preferences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
