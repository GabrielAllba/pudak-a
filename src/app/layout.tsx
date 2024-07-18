import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pudak A - Jerukwudel, Gunung Kidul, Yogyakarta',
    description: 'Pudak A - Jerukwudel, Girisubo, Gunung Kidul, Yogyakarta',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/images/logo.jpg" type="image/jpg" sizes="32" />
            <body className={inter.className}>
                <NavBar></NavBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
