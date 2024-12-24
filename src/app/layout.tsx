import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "sonner";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aman Kumar",
  description: "Instinctive Studio Assignment by Aman Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${notoSans.className} w-screen flex flex-row justify-start items-start bg-[#F6F8FA] antialiased`}
        >
          <Sidebar />

          <main className="w-full h-screen flex flex-col justify-start items-start gap-5 overflow-x-hidden p-5">
            <Header />

            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
