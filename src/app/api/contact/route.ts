import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, interest, organisation, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const name = `${firstName} ${lastName || ''}`.trim()

    await transporter.sendMail({
      from: `"Guru Kripa Trust Website" <${process.env.SMTP_USER}>`,
      to: 'gurukripapkd2025@gmail.com',
      replyTo: email,
      subject: `Contact Enquiry — ${interest || 'General'} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Guru Kripa Charitable Trust</h1>
            <p style="color: #a5d6a7; margin: 8px 0 0;">Contact Form Enquiry</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1B5E20; font-size: 18px; margin-top: 0;">New Message Received</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #666; width: 140px; font-weight: bold;">Name</td><td style="padding: 10px 0; color: #222;">${name}</td></tr>
              <tr style="border-top: 1px solid #eee;"><td style="padding: 10px 0; color: #666; font-weight: bold;">Email</td><td style="padding: 10px 0; color: #222;"><a href="mailto:${email}" style="color: #1B5E20;">${email}</a></td></tr>
              <tr style="border-top: 1px solid #eee;"><td style="padding: 10px 0; color: #666; font-weight: bold;">Phone</td><td style="padding: 10px 0; color: #222;">${phone || '—'}</td></tr>
              <tr style="border-top: 1px solid #eee;"><td style="padding: 10px 0; color: #666; font-weight: bold;">Organisation</td><td style="padding: 10px 0; color: #222;">${organisation || '—'}</td></tr>
              <tr style="border-top: 1px solid #eee;"><td style="padding: 10px 0; color: #666; font-weight: bold;">Interest</td><td style="padding: 10px 0; color: #222;">${interest || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px; background: white; border-left: 4px solid #F57F17; padding: 16px; border-radius: 4px;">
              <p style="margin: 0; color: #666; font-size: 13px; font-weight: bold; margin-bottom: 8px;">Message:</p>
              <p style="margin: 0; color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="margin-top: 24px; color: #999; font-size: 12px; text-align: center;">
              This email was sent from the Guru Kripa Charitable Trust website contact form.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
