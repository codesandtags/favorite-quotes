import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Favorite Quotes',
  description: 'Enjoy my favorite quotes from famous people.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-base-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
