import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google"


export const metadata: Metadata = {
  title: "Business Connect - Velora",
  description: "Powered By Projetil",
};

const poppins = Poppins({
  weight: [
    '100', // Thin
    '200', // Extra Light
    '300', // Light
    '400', // Regular
    '500', // Medium
    '600', // Semi-Bold
    '700', // Bold
    '800', // Extra Bold
    '900', // Black
  ],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
