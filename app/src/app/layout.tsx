import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google OAuth Login",
  description: "Next.js 15.2 + Auth.js v5 (Google)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="min-h-screen flex items-center justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

