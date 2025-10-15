import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '../src/theme/ThemeRegistry';
import FloatingContact from '../src/components/FloatingContact';

export const metadata: Metadata = {
  title: 'STH Education Solutions - Educational Services',
  description: 'Modern, responsive educational services website built with Next.js and MUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="icon" href="/favicon/icon_1.png" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          {children}
          <FloatingContact />
        </ThemeRegistry>
      </body>
    </html>
  );
}
