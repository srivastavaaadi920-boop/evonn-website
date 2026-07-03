import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirementType, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'EV-ONN Website <onboarding@resend.dev>', // You'll need to verify your domain
      to: ['evonnchargingsolutions@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from EV-ONN Website: ${requirementType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #22C55E; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #166534; margin-bottom: 5px; }
            .value { color: #374151; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🔋 New Inquiry from EV-ONN Website</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📋 Inquiry Type:</div>
                <div class="value">${requirementType}</div>
              </div>
              <div class="field">
                <div class="label">👤 Customer Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email Address:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Phone Number:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message || 'No message provided'}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the EV-ONN website contact form.</p>
              <p>Please respond to the customer at: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('✓ Email sent successfully:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry received successfully! We will contact you soon.',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
