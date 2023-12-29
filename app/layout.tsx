import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './layout/header';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next14 Libraries Demo',
    description: 'Author - Keith',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${inter.className} relative`}>
                <Header />
                <main className="relative mx-auto min-h-[100vh] max-w-[1600px] p-3">{children}</main>
            </body>
        </html>
    );
}
