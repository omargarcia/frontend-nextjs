import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
        <header className='container mx-auto pt-5 flex justify-between'>
          <h1 className='text-4xl font-bold'>ADMIN STORE</h1>
          <Link href="/products/new" className={buttonVariants()}>Create Product</Link>

        </header>

        <main className="container mx-auto pt-5 mb-5">
          {children}
        </main>

        <footer className="border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              The source code is available on{" "}
              <a
                href="https://github.com/omargarcia/frontend-nextjs"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
