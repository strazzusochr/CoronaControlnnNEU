import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corona Control Ultimate",
  description: "A 3D crowd control simulation game set in Vienna",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ width: '100%', height: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  );
}
