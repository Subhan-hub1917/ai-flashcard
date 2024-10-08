import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from "./components/Navbar";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/Context";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "AI Flash Card",
  description: "Generated by DEVENGERS",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider publishableKey='pk_test_c291bmQtYWxpZW4tMi5jbGVyay5hY2NvdW50cy5kZXYk'>
        <html lang="en" className="bg-indigo-950 relative">
          <head>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LKHG487GJR"></Script>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LKHG487GJR');
            `}
          </Script>
          </head>
          <body  className={cn("min-h-screen bg-background font-sans antialiased",)}>
            <ThemeProvider>
              <Navbar/>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
  );
}
