import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corazón Sabio",
  description: "Helados conscientes, veganos, sin lácteos y sin azúcar refinada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
