import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, role, email, phone, enquiry } = await request.json();

    // Nodemailer transporter setup with AWS SES SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,    
      port: 587,                      
      secure: false,                  
      auth: {
        user: process.env.MAIL_USER,      
        pass: process.env.MAIL_PASSWORD,  
      },
    });

    // Email options specifically for enquiries
    const mailOptions = {
      from: process.env.MAIL_FROM,        
      to: process.env.MAIL_TO || 'recipient@example.com',   
      subject: `New enquiry from ${name}`,  
      text: `
        Client Name: ${name}
        Client Role: ${role}
        Client Email: ${email}
        Client Phone: ${phone}
        
        Enquiry Message:
        ${enquiry}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Enquiry sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending enquiry:', error);
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 });
  }
}
