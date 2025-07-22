import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ProviderContent from "@/redux/ProviderContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Restaurant Reservations",
  description: "This is a Restaurant Reservations website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#4b1c2f"  // Change to your desired color
          height={6}        // Adjust the height in pixels
          speed={800}       // Animation speed in milliseconds
          showSpinner={false} // Hide the loading spinner
          easing="ease"     // Animation easing

        />
        <ProviderContent>
          {children}
        </ProviderContent>
      </body>
    </html>
  );
}
