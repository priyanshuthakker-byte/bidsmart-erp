import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutShell from "@/components/Layout/LayoutShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BidSmart Cockpit",
  description: "Strategic Tender ERP Cockpit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
