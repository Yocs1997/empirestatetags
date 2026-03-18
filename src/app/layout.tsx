import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empire State Tags | Out-of-State Vehicle Registration & Insurance",
  description: "Having trouble registering your vehicle in your home state? We provide expert out-of-state tag registration and insurance solutions, specializing in New York residents.",
  keywords: "vehicle registration, out of state tags, NY car registration, tag express alternative, auto insurance, Empire State Tags",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        {/* Navigation Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Empire State Tags Logo" 
                width={70} 
                height={70} 
                className="object-contain"
                priority
              />
              <span className="font-bold text-xl text-empire-blue hidden sm:block">Empire State Tags</span>
            </Link>
            <nav className="hidden md:flex gap-8 font-medium text-gray-600">
              <Link href="#services" className="hover:text-empire-blue transition">Services</Link>
              <Link href="#how-it-works" className="hover:text-empire-blue transition">How it Works</Link>
              <Link href="#contact" className="hover:text-empire-blue transition">Contact</Link>
            </nav>
            <a href="#contact" className="bg-empire-blue text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
              Get Started
            </a>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-empire-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/logo.png" alt="Empire State Tags" width={80} height={80} className="bg-white p-2 rounded-md mb-4 object-contain" />
              <p className="text-gray-300 text-sm mt-4">Simplifying vehicle registration and insurance across the US. Your trusted partner on the road.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: support@empirestatetags.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Serving all US States, specializing in NY.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400 border-t border-blue-800 pt-6">
            &copy; {new Date().getFullYear()} Empire State Tags. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}