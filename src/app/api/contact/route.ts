import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {
  try {
    const {
      firstName,
      lastName,
      email,
      message,
      locale,
    } = await req.json();

    // EMAIL envoyé à toi
    await resend.emails.send({
      from:
        "EduLink Collider <contact@edulink.tn>",

      to:
        "contact@edulink.tn",

      replyTo: email,

      subject:
        "New Contact Message 🚀",

      html: `
        <div
          style="
            font-family:Arial;
            padding:30px;
          "
        >
          <h2>
            New Contact Message
          </h2>

          <p>
            <strong>
              First Name:
            </strong>
            ${firstName}
          </p>

          <p>
            <strong>
              Last Name:
            </strong>
            ${lastName}
          </p>

          <p>
            <strong>
              Email:
            </strong>
            ${email}
          </p>

          <p>
            <strong>
              Locale:
            </strong>
            ${locale}
          </p>

          <br />

          <p>
            <strong>
              Message:
            </strong>
          </p>

          <p>
            ${message}
          </p>
        </div>
      `,
    });

    // EMAIL automatique envoyé au user
    await resend.emails.send({
      from:
        "EduLink Collider <contact@edulink.tn>",

      to: email,

      subject:
        "We received your message 🚀",

      html: `
        <div
          style="
            font-family:Arial;
            padding:40px;
          "
        >
          <h1>
            Thank you
          </h1>

          <p>
            We received your message successfully.
          </p>

          <p>
            Our team will contact you soon.
          </p>

          <br />

          <p>
            — EduLink Collider
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}