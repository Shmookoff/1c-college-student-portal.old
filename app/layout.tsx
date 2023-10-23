import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/components/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Студенческий портал',
  description:
    'Студенческий портал Нижневартовского социально-гуманитарного колледжа',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col lg:h-screen lg:max-h-screen lg:min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
