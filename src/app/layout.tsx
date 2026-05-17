// src/app/layout.tsx
import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "EduLink",
  description: "EduLink is a platform that connects students with investors and opportunities to turn their projects into startups.",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}