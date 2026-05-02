"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded border border-brand-charcoal-3 bg-brand-charcoal px-4 py-3 text-brand-cream placeholder-brand-cream-muted/50 outline-none transition-colors focus:border-brand-gold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className="mb-1 block text-sm font-medium text-brand-cream-muted">
          Full Name *
        </label>
        <input
          {...register("name")}
          placeholder="Jane Smith"
          className={inputClass}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-brand-cream-muted">
          Email Address *
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="jane@example.com"
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-brand-cream-muted">
          Phone Number (optional)
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="(555) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-brand-cream-muted">
          Message *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your business and credit goals..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <p className="rounded border border-green-700/40 bg-green-900/20 px-4 py-3 text-sm text-green-400">
          Message sent! We&apos;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded border border-red-700/40 bg-red-900/20 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
