import '@/styles/styles.scss';
import { Inter } from 'next/font/google';
import GlobalProvider from "./GlobalProvider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Top Web and Mobile App Development Company in India - Mobrilz ",
  description: "Mobrilz is a top-rated Web and Mobile App Development Company in India providing the best Web and Mobile App Development Services to emerging enterprises & businesses across the Globe. Get a free quote now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <GlobalProvider>
          {children}
          <div id="nav-full" />
          <div id="nav-sidebar" />
          <div id="cart-sidebar" />
          <div id="overlay" />
          <div id="modal" />
        </GlobalProvider>
      </body>
    </html>
  );
}
