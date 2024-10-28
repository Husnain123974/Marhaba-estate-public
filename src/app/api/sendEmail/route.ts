import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create Nodemailer transporter using SMTP with AWS SES
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,    
      port: 587,                      
      secure: false,                  
      auth: {
        user: process.env.MAIL_USER,      
        pass: process.env.MAIL_PASSWORD,  
      },
    });

    // Define email options
      
      const mailOptions = {
        from: process.env.MAIL_FROM,        
        to: process.env.MAIL_TO || 'recipient@example.com',   
        subject: `New message from ${name}`,  
        text: `Client Email: ${email}\nMessage: ${message}`,  
      };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
