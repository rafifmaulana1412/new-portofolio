import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ahdan Rafif Maulana - Full-Stack Developer",
  description:
    "Interactive portfolio of Muhammad Ahdan Rafif Maulana, Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
  keywords: "Full-Stack Developer, React, Node.js, Web Development, Portfolio",
  authors: [{ name: "Muhammad Ahdan Rafif Maulana" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
