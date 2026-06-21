import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phoneNumber, projectDescription } = body;

    // Standard Backend Validation
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Project Description)' },
        { status: 400 }
      );
    }

    // In production, integrate your email client here (e.g. SendGrid, NodeMailer, Mailgun)
    console.log('Received Lead Submission:', {
      name,
      businessName,
      email,
      phoneNumber,
      projectDescription,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Inquiry successfully submitted!' });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
