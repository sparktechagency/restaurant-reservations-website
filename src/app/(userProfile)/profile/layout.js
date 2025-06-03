import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";
import Sidebar from "@/Components/Common/Sidebar";

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
            <div className="grid grid-cols-6 gap-5">
                <Sidebar className="col-span-1" />
                <div className="col-span-5">
                    {children}
                </div>
            </div>
        </div>
    );
}
