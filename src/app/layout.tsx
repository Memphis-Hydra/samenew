// Instructions: Update layout with OverTheWire metadata and remove ClientBody wrapper

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OverTheWire: Bandit",
  description: "The Bandit wargame is aimed at absolute beginners. It will teach the basics needed to be able to play other wargames.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
