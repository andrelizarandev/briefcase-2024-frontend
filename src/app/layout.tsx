// Modules
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Style
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const titleSubtitle = 'Briefcase 2024 - Andre Lizarán';

export const metadata: Metadata = {
  title: titleSubtitle,
  description: titleSubtitle,
};

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
