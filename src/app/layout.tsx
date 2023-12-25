import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import BottomDrawer from "@/components/BottomDrawer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soham Chowdhury",
  description: "Software Developer & CS Undergrad (2024)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-row justify-between p-4 font-mono">
          <Sidebar />
          <div className="w-full md:w-[calc(100%-256px)] p-4 pt-10 flex flex-col gap-4 mt-4">
            <div className="glass bg-gradient-to-l from-primary/50 to-accent/50 h-40 w-full rounded flex flex-row items-center justify-start px-10 gap-10">
              <div className="max-h-32 max-w-[128px] rounded-full bg-white">
                <Image
                  src="https://i.imgur.com/6hUvFvt.jpg"
                  height={250}
                  width={250}
                  alt="profile"
                  className="object-cover rounded-full p-1"
                />
              </div>
              <div className="flex flex-col items-start justify-evenly">
                <div className="text-xl md:text-3xl font-black text-accent">
                  Soham Chowdhury
                </div>
                <div className="font-extralight text-xs md:text-base">
                  Software Developer Intern @{" "}
                  <a href="https://www.linkedin.com/company/timechainlabs/mycompany/">
                    Timechain Labs
                  </a>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
        <Footer />
        <BottomDrawer />
      </body>
    </html>
  );
}
