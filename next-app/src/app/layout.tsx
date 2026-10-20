import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waves Cleaning Solutions — A Cleaner, Healthier Home",
  description: "Professional cleaning services. More time for what you love.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
