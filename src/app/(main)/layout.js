import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";

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

// not root layout this is main layout

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
