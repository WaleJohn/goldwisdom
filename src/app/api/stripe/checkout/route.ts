import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { PRICING_PLANS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const { planId, annual } = await req.json();

  const plan = PRICING_PLANS.find((p) => p.id === planId);
  if (!plan) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const priceId = annual ? plan.stripePriceIdAnnual : plan.stripePriceIdMonthly;

  if (!priceId) {
    return NextResponse.json(
      { error: "Stripe price not configured for this plan" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
