"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-brand-charcoal">
      <div className="flex items-center justify-between border-b border-brand-charcoal-3 px-4 py-4">
        <span className="font-heading text-xl font-bold">
          <span className="text-brand-gold">Gold</span>
          <span className="text-brand-cream">Wisdom</span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center text-brand-cream-muted hover:text-brand-gold"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-2 p-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`rounded px-4 py-3 text-lg transition-colors ${
              pathname === link.href
                ? "text-brand-gold"
                : "text-brand-cream-muted hover:text-brand-cream"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-6">
          <Button href="/pricing" size="lg" className="w-full" onClick={onClose}>
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}
