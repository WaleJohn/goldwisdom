import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GoldWisdom. Book a free consultation or ask us anything about building business credit.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-charcoal-2 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mb-4">Get In Touch</Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact GoldWisdom</h1>
          <p className="mx-auto max-w-xl text-brand-cream-muted">
            Have a question or ready to start building your business credit? Reach out
            and a credit expert will respond within 24 hours.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-brand-charcoal">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <svg className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-brand-cream-muted">Phone</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-brand-cream hover:text-brand-gold transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <svg className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-brand-cream-muted">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-brand-cream hover:text-brand-gold transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <svg className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-brand-cream-muted">Response Time</p>
                  <p className="font-semibold text-brand-cream">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-brand-gold/20 bg-brand-charcoal-2 p-6">
              <p className="mb-2 font-semibold text-brand-gold">Free Consultation Available</p>
              <p className="text-sm text-brand-cream-muted">
                Not sure if GoldWisdom is right for you? Schedule a free, no-obligation
                consultation and we&apos;ll walk you through exactly what we can do for your business.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
