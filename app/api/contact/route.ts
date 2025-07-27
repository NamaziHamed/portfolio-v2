import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Named export for POST
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("Sending email to:", process.env.EMAIL_USER);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
