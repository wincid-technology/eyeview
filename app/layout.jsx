import { Mulish } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeicons/primeicons.css';
import Header from "@/components/Navbar";
import Tailwind from 'primereact/passthrough/tailwind';
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Eye View Enterprises - Publication and Consultancy",
  description: "Providing insightful research, expert guidance, and knowledge-based professional solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className}`}
      >
        <Header />
        {children}
        <Toaster
          position="top-center"
          containerStyle={{
            zIndex: 999999,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
