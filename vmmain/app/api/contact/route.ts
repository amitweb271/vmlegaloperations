import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: Request) {
  console.log('1. API route started');
  
  try {
    // Check env vars
    console.log('2. Checking env vars:', {
      host: !!process.env.SMTP_HOST,
      port: !!process.env.SMTP_PORT,
      user: !!process.env.SMTP_USER,
      pass: !!process.env.SMTP_PASS ? 'Yes' : 'No',
    });

    const body = await request.json();
    console.log('3. Form data:', body);

    const { name, email, firmName, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
    }

    // Create transporter
    console.log('4. Creating transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,  // new commit
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    console.log('5. Verifying connection...');
    await transporter.verify();
    console.log('6. Connection verified ✅');

    // Send mail
    console.log('7. Sending email...');
    const info = await transporter.sendMail({
      from: `"VM Legal" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firm:</strong> ${firmName || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('8. Email sent ✅:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });

  } catch (error: any) {
    console.error('❌ ERROR:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });

    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}