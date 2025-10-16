import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ObjectWire | Precision Intelligence Publisher",
  description: "ObjectWire operates as a precision intelligence publisher, producing event-driven analysis with strategic relevance and verifiable sources.",
  keywords: ["intelligence", "analysis", "research", "precision", "objectwire"],
  authors: [{ name: "ObjectWire Team" }],
  creator: "ObjectWire",
  publisher: "ObjectWire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-mono font-bold tracking-wider">
                  OBJECT WIRE &gt;&gt; ORG
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <a 
                  href="/" 
                  className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  HOME
                </a>
                <a 
                  href="/blog" 
                  className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  ANALYSIS
                </a>
                <a 
                  href="/about" 
                  className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  EDITORIAL
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider mb-4">CONTACT INFO</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>(575) 495-0323</p>
                  <p>JACK@OBJECTWIRE.ORG</p>
                  <p>2921 E 17TH ST BUILDING 3, APT 3205<br />AUSTIN, TX 78702</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider mb-4">USEFUL LINKS</h3>
                <div className="space-y-2">
                  <a href="/blog" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Analysis
                  </a>
                  <a href="/about" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Editorial Standards
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  © 2025 All Rights Reserved | Object-Wire
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
