// Modules
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Style
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Briefcase",
  description: "Briefcase 2024 - Andre Lizarán",
};

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
