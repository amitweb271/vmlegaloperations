// import { NextResponse } from 'next/server';
// const nodemailer = require('nodemailer');

// export async function POST(request: Request) {
//   console.log('1. API route started');
  
//   try {
//     // Check env vars
//     console.log('2. Checking env vars:', {
//       host: !!process.env.SMTP_HOST,
//       port: !!process.env.SMTP_PORT,
//       user: !!process.env.SMTP_USER,
//       pass: !!process.env.SMTP_PASS ? 'Yes' : 'No',
//     });

//     const body = await request.json();
//     console.log('3. Form data:', body);

//     const { name, email, firmName, message } = body;

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'Missing fields' },
//         { status: 400 }
//       );
//     }

//     // Create transporter
//     console.log('4. Creating transporter...');
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,  // new commit bbbb
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Verify connection
//     console.log('5. Verifying connection...');
//     await transporter.verify();
//     console.log('6. Connection verified ✅');

//     // Send mail
//     console.log('7. Sending email...');
//     const info = await transporter.sendMail({
//       from: `"VM Legal" <${process.env.SMTP_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Contact: ${name}`,
//       html: `
//         <h2>New Contact</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Firm:</strong> ${firmName || 'N/A'}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     console.log('8. Email sent ✅:', info.messageId);

//     return NextResponse.json({ 
//       success: true, 
//       messageId: info.messageId 
//     });

//   } catch (error: any) {
//     console.error('❌ ERROR:', {
//       message: error.message,
//       code: error.code,
//       command: error.command,
//       stack: error.stack
//     });

//     return NextResponse.json(
//       { error: error.message || 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, firmName, phone, message, firmSize } = body;

    const { data, error } = await resend.emails.send({
      from: 'VM Legal Operations <onboarding@resend.dev>',
      to: [process.env.RECEIVER_EMAIL || ''],
      subject: `New Contact: ${name} from ${firmName || 'Law Firm'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firm:</strong> ${firmName || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Firm Size:</strong> ${firmSize || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}