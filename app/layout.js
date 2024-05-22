import { Poppins } from 'next/font/google';
import "./globals.css";
import NavigationMenu from '@/components/reusable/header/Navbar';
import Footer from '@/components/reusable/footer/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
      <body className={poppins.variable}>
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}


