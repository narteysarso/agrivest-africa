import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Agrivest Africa",
  description: "Generated by create next app",
  icons: "/images/logo.png",
  keywords: ["agriculture", "africa", "ghana", "farming", "crowdfund"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Link href={"/"} className="flex">
                <Image
                  src={process.env.APP_ICON as string}
                  width={34}
                  height={34}
                  alt="logo"
                /> {process.env.APP_NAME}
              </Link>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This library has saved me countless hours of work and
                  helped me deliver stunning designs to my clients faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div>
          </div>
          <div className="pt-10 lg:p-8">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
