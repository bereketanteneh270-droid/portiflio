import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, budget, projectType, message } = body;

    // Basic server-side validation
    if (!name || !email || !budget || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log submission (replace with email service / Supabase in production)
    console.log('📬 New contact form submission:', {
      name,
      email,
      phone,
      company,
      budget,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add Resend/Supabase integration
    // const { data, error } = await supabase.from('messages').insert([{ ... }]);
    // await resend.emails.send({ from: '...', to: 'bereketanteneh270@gmail.com', ... });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
