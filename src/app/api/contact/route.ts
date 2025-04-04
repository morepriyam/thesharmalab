import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactInput, ratelimit, getClientIP } from "@/lib/security";
import { headers } from 'next/headers';

// Maximum request size in bytes (100KB)
const MAX_CONTENT_LENGTH = 100 * 1024;

export async function POST(request: Request) {
  try {
    // Check request size
    const contentLength = parseInt(request.headers.get('content-length') || '0');
    if (contentLength > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { message: "Request too large" },
        { status: 413 }
      );
    }

    // Rate limiting
    const ip = getClientIP(request);
    const { success, reset } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { 
          message: "Too many requests", 
          resetTime: new Date(reset).toISOString() 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': `${Math.ceil((reset - Date.now()) / 1000)}`,
          },
        }
      );
    }

    // Get and validate input
    const data = await request.json();
    const validation = validateContactInput(data);

    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        { message: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.sanitizedData;

    // Email sending configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email with sanitized data
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Use your email as sender
      replyTo: email, // Set reply-to to the user's email
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { 
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
