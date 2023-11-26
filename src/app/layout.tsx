import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { inter } from './fonts';
import { UserProvider } from '@/contexts/UserContext';

export const metadata: Metadata = {
  title: 'Favorite Quotes',
  description: 'Enjoy my favorite quotes from famous people.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-base-300`}>
        <UserProvider>
          <Navbar>{children}</Navbar>
        </UserProvider>
      </body>
    </html>
  );
}
