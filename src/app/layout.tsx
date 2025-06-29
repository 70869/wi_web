import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "(wired-in) - Where Gaming Meets Innovation",
  description: "High-performance game servers for Minecraft and Counter-Strike 2 with secure file hosting and a vibrant community.",
  keywords: "gaming, minecraft, counter-strike, servers, community, file hosting",
  authors: [{ name: "(wired-in) Team" }],
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
        <link rel="preload" href="/assets/images/bgofficecs2.png" as="image" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://discord.gg" />
        <link rel="preconnect" href="https://steamcommunity.com" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="preconnect" href="https://cdn.discordapp.com" />
        <link rel="preconnect" href="https://media.discordapp.net" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//discord.gg" />
        <link rel="dns-prefetch" href="//steamcommunity.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="//cdn.discordapp.com" />
        <link rel="dns-prefetch" href="//media.discordapp.net" />
        
        {/* Font optimization */}
        <link rel="preload" href="/_next/static/media/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
