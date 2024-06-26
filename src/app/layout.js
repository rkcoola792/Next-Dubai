import { Inter } from "next/font/google";
import "./globals.css";

import MobileMenuNew from "./mobileMenu/mobileMenu";
import Footer from "./footer/page";
import Header from "../components/Navbar/page";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
      <div className="overflow-x-clip lg:overflow-x-visible relative lg:mt-36 mt-20 sm:mt-28">
        <div className="hidden lg:block fixed w-full top-0 z-[100]">

        <Header></Header>
        </div>
        <div className="lg:hidden fixed w-full -top-2 z-[100] ">
        {/* <MobileMenu/> */}
        <MobileMenuNew></MobileMenuNew>
        </div>
        
        {children}
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
