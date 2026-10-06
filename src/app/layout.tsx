import type { Metadata } from 'next';
import { Anybody, Geist, Martian_Mono } from 'next/font/google';
import './globals.css';

const fontDisplay = Anybody({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Parth Champaneri | MERN Stack Developer',
  description:
    'Parth Champaneri is a MERN Stack Developer building scalable web applications with React.js, Next.js, Node.js, Express.js, MongoDB, and AI-powered tools.',
  openGraph: {
    title: 'Parth Champaneri | MERN Stack Developer',
    description:
      'MERN Stack Developer with hands-on experience building scalable web apps, REST APIs, responsive UIs, and AI applications.',
    images: ['/images/profile pic.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`dark ${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23E4311C'/%3E%3Ctext x='32' y='43' font-family='Arial Black,Arial' font-weight='900' font-size='24' text-anchor='middle' fill='%23FFF4EA'%3EPC%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-[var(--red)] selection:text-[var(--on-red)]">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
