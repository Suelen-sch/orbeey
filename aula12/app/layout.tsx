'use client'; // 👈 adicione no topo
import './globals.css';
import Navbar from './components/navbar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const esconderNavbar = pathname === '/login'; 

  return (
    <html lang="en">
      <body className="antialiased">
        {!esconderNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
