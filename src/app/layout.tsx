import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Janken Strategy',
    description: 'This is a janken App.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
