import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, firmName, phone, message, firmSize } = body;

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email and Message are required." },
        { status: 400 }
      );
    }

    // ✅ Send Email
    const { error } = await resend.emails.send({
      from: "VM Legal Operations <noreply@vmlegaloperations.com>", // verified domain
      to: process.env.RECEIVER_EMAIL as string, // from Vercel env
      replyTo: email, // user email for direct reply
      subject: `New Contact: ${name} from ${firmName || "Law Firm"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firm:</strong> ${firmName || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Firm Size:</strong> ${firmSize || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}