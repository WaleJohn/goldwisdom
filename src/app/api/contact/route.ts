import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = result.data;
  // TODO: replace with Resend or Nodemailer to email moneydodoge@gmail.com
  console.log("Contact form submission:", { name, email, phone, message });

  return NextResponse.json({ success: true });
}
