import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate Next Panel",
  description: "Versão de desenvolvimento do Boilerplate Next Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
