import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal-2">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 font-heading text-2xl font-bold">
              <span className="text-brand-gold">Gold</span>
              <span className="text-brand-cream">Wisdom</span>
            </p>
            <p className="text-sm leading-relaxed text-brand-cream-muted">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream-muted transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-brand-cream-muted">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-gold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-gold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <p className="text-center text-xs text-brand-cream-muted">
          &copy; {new Date().getFullYear()} GoldWisdom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
