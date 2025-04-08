import { Inter } from "next/font/google";
import "./globals.css";
import { FixHydrationClient } from "../components/fix-hydration-client";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scheme-only-dark" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <FixHydrationClient />
        {children}
      </body>
    </html>
  );
}
