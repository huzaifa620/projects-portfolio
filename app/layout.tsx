import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Portfolio - Web & Mobile App Development",
  description: "Showcasing our innovative web and mobile applications - Transform your ideas into powerful digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
