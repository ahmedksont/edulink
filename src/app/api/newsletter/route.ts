import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const translations = {
  en: {
    subject:
      "Welcome to EduLink Collider 🚀",

    title: "Welcome 🚀",

    message:
      "Thank you for subscribing to EduLink Collider.",

    footer:
      "You'll receive our latest news and events.",
  },

  fr: {
    subject:
      "Bienvenue chez EduLink Collider 🚀",

    title: "Bienvenue 🚀",

    message:
      "Merci pour votre inscription à EduLink Collider.",

    footer:
      "Vous recevrez nos dernières actualités et événements.",
  },

  de: {
    subject:
      "Willkommen bei EduLink Collider 🚀",

    title: "Willkommen 🚀",

    message:
      "Vielen Dank für Ihre Anmeldung bei EduLink Collider.",

    footer:
      "Sie erhalten unsere neuesten Nachrichten und Veranstaltungen.",
  },
};

export async function POST(
  req: Request
) {
  try {
    const { email, locale } =
      await req.json();

    if (!email) {
      return NextResponse.json(
        {
          error:
            "Email required",
        },
        { status: 400 }
      );
    }

    const lang =
      translations[
        locale as keyof typeof translations
      ] || translations.en;

    // EMAIL envoyé au subscriber
    const subscriberEmail =
      await resend.emails.send({
        from:
          "EduLink Collider <contact@edulink.tn>",

        to: email,

        replyTo:
          "contact@edulink.tn",

        subject: lang.subject,

        html: `
          <div
            style="
              font-family:Arial;
              padding:40px;
              background:#ffffff;
            "
          >
            <h1
              style="
                color:#7c3aed;
              "
            >
              ${lang.title}
            </h1>

            <p
              style="
                color:#333;
                font-size:16px;
              "
            >
              ${lang.message}
            </p>

            <p
              style="
                color:#666;
                margin-top:20px;
              "
            >
              ${lang.footer}
            </p>

            <br />

            <p
              style="
                color:#999;
              "
            >
              — EduLink Collider
            </p>
          </div>
        `,
      });

    console.log(
      "Subscriber email:",
      subscriberEmail
    );
    const adminEmail =
      await resend.emails.send({
        from:
          "EduLink Collider <contact@edulink.tn>",

        to:
          "contact@edulink.tn",

        subject:
          "New Newsletter Subscriber 🚀",

        html: `
          <div
            style="
              font-family:Arial;
              padding:30px;
            "
          >
            <h2>
              New Subscriber
            </h2>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Locale:</strong>
              ${locale}
            </p>
          </div>
        `,
      });

    console.log(
      "Admin email:",
      adminEmail
    );

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