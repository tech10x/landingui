import { Roboto } from 'next/font/google';
import "./globals.css";
import NavigationMenu from '@/components/reusable/header/Navbar';
import Footer from '@/components/reusable/footer/Footer';

const roboto_init = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
  title: "Tech10x",
  description: "Software Company",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_init.variable}>
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}


