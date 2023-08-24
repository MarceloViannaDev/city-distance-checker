import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Distance Checker',
  description: 'City Distance Checker for Traveller',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-center bg-no-repeat bg-backgroundMain ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
