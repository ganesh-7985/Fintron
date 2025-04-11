import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Fintron",
  description: "One stop solution for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />

        <main className="min-h-screen">{children}</main>

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center text-gray-600">
            <p className="text-sm">© 2025 Fintron. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
