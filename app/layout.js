import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashWrapper from "./SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ayodhana Fighters',
  description: 'Master discipline and strength at Ayodhana Martial Arts Academy. Expert training in Karate, Kickboxing, and Self-Defense for all ages. Join the fight today!',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashWrapper>
        {children}
        </SplashWrapper>
      </body>
    </html>
  );
}
