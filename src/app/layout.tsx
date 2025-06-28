import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(wired-in) - Gaming Community & Server Hosting",
  description: "A passionate community of gamers and tech enthusiasts from the LoveTaps Steam group. Experience high-performance game servers and secure file hosting.",
  keywords: ["gaming", "servers", "minecraft", "cs2", "community", "file hosting", "steam group"],
  authors: [{ name: "(wired-in) Team" }],
  creator: "(wired-in)",
  openGraph: {
    title: "(wired-in) - Gaming Community & Server Hosting",
    description: "A passionate community of gamers and tech enthusiasts from the LoveTaps Steam group.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "(wired-in) - Gaming Community & Server Hosting",
    description: "A passionate community of gamers and tech enthusiasts from the LoveTaps Steam group.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
