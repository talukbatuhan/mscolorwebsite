import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Ortam değişkenlerini al
const SENDER_EMAIL = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASS;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

// Nodemailer Taşıyıcısını Oluşturma (Gmail SMTP örneği)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SENDER_EMAIL,
        pass: EMAIL_PASSWORD,
    },
});

export async function POST(request) {
    try {
        // Gelen JSON verisini çöz
        const data = await request.json(); 
        const { name, email, phone, message } = data;

        // Basit doğrulama
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Lütfen zorunlu alanları doldurun.' },
                { status: 400 } // Bad Request
            );
        }

        // E-posta içeriğini hazırla
        const mailOptions = {
            from: SENDER_EMAIL, 
            to: RECIPIENT_EMAIL, // Formun size geleceği adres
            subject: `Yeni İletişim Formu Mesajı: ${name}`,
            html: `
                <h1>Web Sitenizden Yeni Mesaj</h1>
                <p><strong>Gönderen Adı:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
                <hr/>
                <p><strong>Mesaj:</strong></p>
                <p>${message}</p>
            `,
        };

        // E-postayı gönder
        await transporter.sendMail(mailOptions);
        
        // Başarılı yanıtı döndür (bu yanıt ContactForm.jsx bileşeninizdeki "result.success" kısmını tetikler)
        return NextResponse.json(
            { success: true, message: 'Mesajınız başarıyla gönderildi.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('API İletişim Hatası:', error);
        return NextResponse.json(
            { success: false, message: 'Sunucu hatası veya e-posta gönderme başarısız.' },
            { status: 500 } // Internal Server Error
        );
    }
}