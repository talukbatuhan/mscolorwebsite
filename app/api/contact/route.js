// mscolorweb/app/api/contact/route.js - Server Side Logic for Vercel

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer Transporter'ı Yapılandır
const transporter = nodemailer.createTransport({
    service: 'gmail', // Veya başka bir servis
    auth: {
        // NEXT.JS OTOMATİK OLARAK .env DEĞİŞKENLERİNİ YÜKLER
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request) {
    try {
        const data = await request.json(); 
        const { name, email, phone, message } = data; 
        
        // Basit Doğrulama
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields.' }, 
                { status: 400 }
            );
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `[Vercel Form] New Message from ${name} (${email})`,
            html: `
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p> 
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // E-postayı Gönder
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ 
            message: 'Email sent successfully!', 
            success: true 
        }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Failed to send email. Internal Server Error.' }, 
            { status: 500 }
        );
    }
}