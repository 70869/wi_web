import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(wired-in) - Where Gaming Meets Innovation",
  description: "High-performance game servers for Minecraft and Counter-Strike 2 with secure file hosting and a vibrant community.",
  keywords: "gaming, minecraft, counter-strike, servers, community, file hosting",
  authors: [{ name: "(wired-in) Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "(wired-in) - Where Gaming Meets Innovation",
    description: "High-performance game servers for Minecraft and Counter-Strike 2 with secure file hosting and a vibrant community.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "(wired-in) - Where Gaming Meets Innovation",
    description: "High-performance game servers for Minecraft and Counter-Strike 2 with secure file hosting and a vibrant community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/images/logo.png" as="image" />
        <link rel="preload" href="/assets/images/bgmc2.png" as="image" />
        <link rel="preload" href="/assets/images/minecraft_banner.png" as="image" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://discord.gg" />
        <link rel="preconnect" href="https://steamcommunity.com" />
        <link rel="preconnect" href="https://github.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//discord.gg" />
        <link rel="dns-prefetch" href="//steamcommunity.com" />
        <link rel="dns-prefetch" href="//github.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
